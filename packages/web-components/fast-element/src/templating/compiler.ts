import type { BehaviorTargets } from "./html-directive";
import { _interpolationEnd, _interpolationStart, DOM } from "../dom";
import type { Binding, ExecutionContext } from "../observation/observable";
import { HTMLBindingDirective } from "./binding";
import type { HTMLDirective, NodeBehaviorFactory } from "./html-directive";

type InlineDirective = HTMLDirective & {
    targetName?: string;
    binding: Binding;
    targetAtContent(): void;
};

const descriptorCache: PropertyDescriptorMap = {};

function addTargetDescriptor(
    descriptors: PropertyDescriptorMap,
    parentId: string,
    targetId: string,
    targetIndex: number
) {
    if (
        targetId === "r" || // root
        targetId === "h" || // host
        descriptors[targetId]
    ) {
        return;
    }

    if (!descriptors[parentId]) {
        const index = parentId.lastIndexOf(".");

        if (index !== -1) {
            const grandparentId = parentId.substr(0, index);
            const childIndex = parseInt(parentId.substr(index + 1));
            addTargetDescriptor(descriptors, grandparentId, parentId, childIndex);
        }
    }

    descriptors[targetId] = createTargetDescriptor(parentId, targetId, targetIndex);
}

function createTargetDescriptor(
    parentId: string,
    targetId: string,
    targetIndex: number
): PropertyDescriptor {
    let descriptor = descriptorCache[targetId];

    if (!descriptor) {
        const field = `_${targetId}`;

        descriptorCache[targetId] = descriptor = {
            configurable: false,
            get: function () {
                return (
                    this[field] || (this[field] = this[parentId].childNodes[targetIndex])
                );
            },
        };
    }

    return descriptor;
}

let sharedContext: CompilationContext | null = null;

// used to prevent creating lots of objects just to track node and index while compiling
const next = {
    index: 0,
    node: null as ChildNode | null,
};

class CompilationContext {
    public behaviorFactories!: NodeBehaviorFactory[];
    public directives: ReadonlyArray<HTMLDirective>;
    public targetIds!: string[];
    public descriptors: PropertyDescriptorMap;

    public addFactory(
        factory: NodeBehaviorFactory,
        parentId: string,
        targetId: string,
        targetIndex: number
    ): void {
        if (this.targetIds.indexOf(targetId) === -1) {
            this.targetIds.push(targetId);
        }

        addTargetDescriptor(this.descriptors, parentId, targetId, targetIndex);
        factory.targetId = targetId;
        this.behaviorFactories.push(factory);
    }

    public captureContentBinding(
        directive: HTMLBindingDirective,
        parentId: string,
        targetId: string,
        targetIndex: number
    ): void {
        directive.targetAtContent();
        this.addFactory(directive, parentId, targetId, targetIndex);
    }

    public reset(): void {
        this.behaviorFactories = [];
        this.targetIds = [];
        this.descriptors = {};
    }

    public release(): void {
        sharedContext = this;
    }

    public static borrow(directives: ReadonlyArray<HTMLDirective>): CompilationContext {
        const shareable = sharedContext || new CompilationContext();
        shareable.directives = directives;
        shareable.reset();
        sharedContext = null;
        return shareable;
    }
}

function createAggregateBinding(
    parts: (string | InlineDirective)[]
): HTMLBindingDirective {
    if (parts.length === 1) {
        return (parts[0] as any) as HTMLBindingDirective;
    }

    let targetName: string | undefined;
    const partCount = parts.length;
    const finalParts = parts.map((x: string | InlineDirective) => {
        if (typeof x === "string") {
            return (): string => x;
        }

        targetName = x.targetName || targetName;
        return x.binding;
    });

    const binding = (scope: unknown, context: ExecutionContext): string => {
        let output = "";

        for (let i = 0; i < partCount; ++i) {
            output += finalParts[i](scope, context);
        }

        return output;
    };

    const directive = new HTMLBindingDirective(binding);
    directive.targetName = targetName;
    return directive;
}

const interpolationEndLength = _interpolationEnd.length;

function parseContent(
    context: CompilationContext,
    value: string
): (string | InlineDirective)[] | null {
    const valueParts = value.split(_interpolationStart);

    if (valueParts.length === 1) {
        return null;
    }

    const bindingParts: any[] = [];

    for (let i = 0, ii = valueParts.length; i < ii; ++i) {
        const current = valueParts[i];
        const index = current.indexOf(_interpolationEnd);
        let literal;

        if (index === -1) {
            literal = current;
        } else {
            const directiveIndex = parseInt(current.substring(0, index));
            bindingParts.push(context.directives[directiveIndex]);
            literal = current.substring(index + interpolationEndLength);
        }

        if (literal !== "") {
            bindingParts.push(literal);
        }
    }

    return bindingParts;
}

function compileAttributes(
    context: CompilationContext,
    parentId: string,
    node: HTMLElement,
    nodeId: string,
    nodeIndex: number,
    includeBasicValues: boolean = false
): void {
    const attributes = node.attributes;

    for (let i = 0, ii = attributes.length; i < ii; ++i) {
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = parseContent(context, attrValue);
        let result: HTMLBindingDirective | null = null;

        if (parseResult === null) {
            if (includeBasicValues) {
                result = new HTMLBindingDirective(() => attrValue);
                result.targetName = attr.name;
            }
        } else {
            result = createAggregateBinding(parseResult);
        }

        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result, parentId, nodeId, nodeIndex);
        }
    }
}

function compileContent(
    context: CompilationContext,
    node: Text,
    parentId,
    nodeId,
    nodeIndex
) {
    const parseResult = parseContent(context, node.textContent!);
    if (parseResult === null) {
        next.node = node.nextSibling;
        next.index = nodeIndex + 1;
        return next;
    }

    let lastNode = node;
    for (let i = 0, ii = parseResult.length; i < ii; ++i) {
        const currentPart = parseResult[i];
        let currentNode: Text;

        if (i === 0) {
            currentNode = node;
        } else {
            nodeIndex++;
            nodeId = `${parentId}.${nodeIndex}`;
            currentNode = lastNode.parentNode!.insertBefore(
                document.createTextNode(""),
                lastNode.nextSibling
            );
        }

        if (typeof currentPart === "string") {
            currentNode.textContent = currentPart;
        } else {
            currentNode.textContent = " ";
            context.captureContentBinding(
                currentPart as HTMLBindingDirective,
                parentId,
                nodeId,
                nodeIndex
            );
        }

        lastNode = currentNode;
    }

    next.index = nodeIndex + 1;
    next.node = lastNode.nextSibling;
    return next;
}

function compileNode(
    context: CompilationContext,
    parentId: string,
    node: Node,
    nodeIndex: number
) {
    const nodeId = `${parentId}.${nodeIndex}`;

    switch (node.nodeType) {
        case 1: // element node
            compileAttributes(context, parentId, node as HTMLElement, nodeId, nodeIndex);

            let child = node.firstChild;
            let childIndex = 0;

            while (child) {
                const result = compileNode(context, nodeId, child, childIndex);
                child = result.node;
                childIndex = result.index;
            }

            break;
        case 3: // text node
            return compileContent(context, node as Text, parentId, nodeId, nodeIndex);
        case 8: // comment
            if (DOM.isMarker(node)) {
                context.addFactory(
                    context.directives[DOM.extractDirectiveIndexFromMarker(node)],
                    parentId,
                    nodeId,
                    nodeIndex
                );
            }
            break;
    }

    next.index = nodeIndex + 1;
    next.node = node.nextSibling;
    return next;
}

/**
 * The result of compiling a template and its directives.
 * @public
 */
export class HTMLTemplateCompilationResult {
    private proto: any;

    /**
     *
     * @param fragment - A cloneable DocumentFragment representing the compiled HTML.
     * @param viewBehaviorFactories - The behaviors that should be applied to the template's HTML.
     * @param hostBehaviorFactories - The behaviors that should be applied to the host element that
     * the template is rendered into.
     * @param targetIds - The structural ids used by the behavior factories.
     */
    public constructor(
        public readonly fragment: DocumentFragment,
        public readonly viewBehaviorFactories: NodeBehaviorFactory[],
        public readonly hostBehaviorFactories: NodeBehaviorFactory[],
        private targetIds: string[],
        descriptors: PropertyDescriptorMap
    ) {
        this.proto = Object.create(null, descriptors);
    }

    get hasHostBehaviors() {
        return this.hostBehaviorFactories.length > 0;
    }

    get behaviorCount() {
        return this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
    }

    /**
     * Creates a behavior target lookup object.
     * @param host - The host element.
     * @param root - The root element.
     * @returns A lookup object for behavior targets.
     */
    public createTargets(root: Node, host?: Node): BehaviorTargets {
        const targets = Object.create(this.proto, {
            r: { value: root },
            h: { value: host || root },
        });

        const ids = this.targetIds;

        for (let i = 0, ii = ids.length; i < ii; ++i) {
            targets[ids[i]]; // trigger locators
        }

        return targets;
    }
}

/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
export function compileTemplate(
    template: HTMLTemplateElement,
    directives: ReadonlyArray<HTMLDirective>
): HTMLTemplateCompilationResult {
    const fragment = template.content;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
    document.adoptNode(fragment);

    const context = CompilationContext.borrow(directives);
    compileAttributes(context, "", template, /* host */ "h", 0, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();

    if (
        // If the first node in a fragment is a marker, that means it's an unstable first node,
        // because something like a when, repeat, etc. could add nodes before the marker.
        // To mitigate this, we insert a stable first node. However, if we insert a node,
        // that will alter the result of the TreeWalker. So, we also need to offset the target index.
        DOM.isMarker(fragment.firstChild!) ||
        // Or if there is only one node, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        fragment.childNodes.length === 1
    ) {
        fragment.insertBefore(document.createComment(""), fragment.firstChild);
    }

    let node = fragment.firstChild;
    let nodeIndex = 0;
    const parentId = "r"; //root

    while (node) {
        const result = compileNode(context, parentId, node, nodeIndex);
        node = result.node;
        nodeIndex = result.index;
    }

    next.node = null; // prevent leaks

    const viewBehaviorFactories = context.behaviorFactories;
    const targetIds = context.targetIds;
    const descriptors = context.descriptors;
    context.release();

    return new HTMLTemplateCompilationResult(
        fragment,
        viewBehaviorFactories,
        hostBehaviorFactories,
        targetIds,
        descriptors
    );
}
