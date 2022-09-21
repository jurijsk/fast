import {
    attr,
    bind,
    FASTElement,
    observable,
    RepeatDirective,
    RepeatOptions,
    ViewBehaviorOrchestrator,
    ViewTemplate,
} from "@microsoft/fast-element";
import { Orientation } from "@microsoft/fast-web-utilities";

/**
 *  The Data List class
 *
 * @public
 */
export class FASTDataList extends FASTElement {
    /**
     * Whether or not to recycle the html container used to display items.
     * May help performance but containers may retain artifacts from previous use that
     * developers will need to clear.
     *
     * @public
     */
    @attr({ attribute: "recycle", mode: "boolean" })
    public recycle: boolean = false;

    /**
     *  Whether or not positioning (ie. indexing) is available for the items generated by the repeat directive
     *
     * @public
     */
    @attr({ attribute: "positioning", mode: "boolean" })
    public positioning: boolean = false;

    /**
     * Whether the list is oriented vertically or horizontally.
     * Default is vertical.
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    public orientation: Orientation = Orientation.vertical;
    protected orientationChanged(): void {
        if (this.$fastController.isConnected) {
            this.updateItemTemplate();
        }
    }

    /**
     * The source data array.
     *
     * @public
     */
    @observable
    public sourceItems: object[];
    protected sourceItemsChanged(): void {
        this.displayItems = this.sourceItems;
    }

    /**
     * The default ViewTemplate used to render items vertically.
     *
     * @internal
     */
    public defaultVerticalItemTemplate: ViewTemplate;

    /**
     * The default ViewTemplate used to render items horizontally.
     *
     * @internal
     */
    public defaultHorizontalItemTemplate: ViewTemplate;

    /**
     * The ViewTemplate used in the items repeat loop
     *
     * @public
     */
    @observable
    public itemTemplate: ViewTemplate;

    /**
     * The ViewTemplate used to render list item contents
     *
     * @public
     */
    public itemContentsTemplate: ViewTemplate;
    protected itemContentsTemplateChanged(): void {
        if (this.$fastController.isConnected) {
            this.initializeRepeatBehavior();
        }
    }

    /**
     * The items currently displayed
     *
     * @public
     */
    @observable
    public displayItems: object[] | null = null;
    protected displayItemsChanged(): void {}

    // the placeholder element used by the repeat behavior
    protected itemsPlaceholder: Node;

    private behaviorOrchestrator: ViewBehaviorOrchestrator | null = null;

    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.initializeRepeatBehavior();
    }

    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    protected createPlaceholderElement(): void {
        if (this.itemsPlaceholder === undefined) {
            this.itemsPlaceholder = document.createComment("");
            this.appendChild(this.itemsPlaceholder);
        }
    }

    protected getRepeatOptions(): RepeatOptions {
        return {
            positioning: this.positioning,
            recycle: this.recycle,
        };
    }

    /**
     * applies the correct item template.
     * Once an author overrides the item template with a custom one the author must manage template changes themselves.
     */
    protected updateItemTemplate(): void {
        if (
            !this.itemTemplate ||
            this.itemTemplate === this.defaultHorizontalItemTemplate ||
            this.itemTemplate === this.defaultVerticalItemTemplate
        ) {
            this.itemTemplate =
                this.orientation === Orientation.vertical
                    ? this.defaultVerticalItemTemplate
                    : this.defaultHorizontalItemTemplate;
        }
    }

    /**
     * initialize repeat behavior
     */
    protected initializeRepeatBehavior(): void {
        if (!this.displayItems) {
            this.displayItems = this.sourceItems;
        }
        if (this.behaviorOrchestrator === null) {
            if (!this.itemTemplate) {
                this.updateItemTemplate();
            }
            this.createPlaceholderElement();
            this.behaviorOrchestrator = ViewBehaviorOrchestrator.create(this);
            this.$fastController.addBehavior(this.behaviorOrchestrator);
            this.behaviorOrchestrator.addBehaviorFactory(
                new RepeatDirective<FASTDataList>(
                    bind(x => x.displayItems, false),
                    bind(x => x.itemTemplate, false),
                    this.getRepeatOptions()
                ),
                this.itemsPlaceholder
            );
        }
    }
}