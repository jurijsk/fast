"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[17176],{11257:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(31085),i=s(71184);const r={id:"tree-view",title:"fast-tree-view",sidebar_label:"tree-view",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-tree-view.mdx",description:"fast-tree-view is a web component implementation of a tree-item.",keywords:["fast-tree-view"]},d=void 0,l={id:"components/tree-view",title:"fast-tree-view",description:"fast-tree-view is a web component implementation of a tree-item.",source:"@site/versioned_docs/version-1.x/components/fast-tree-view.mdx",sourceDirName:"components",slug:"/components/tree-view",permalink:"/docs/1.x/components/tree-view",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-tree-view.mdx",tags:[],version:"1.x",frontMatter:{id:"tree-view",title:"fast-tree-view",sidebar_label:"tree-view",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-tree-view.mdx",description:"fast-tree-view is a web component implementation of a tree-item.",keywords:["fast-tree-view"]},sidebar:"docs",previous:{title:"tooltip",permalink:"/docs/1.x/components/tooltip"},next:{title:"Building Components",permalink:"/docs/1.x/category/building-components"}},o={},c=[{value:"Setup",id:"setup",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Customizing the Glyph",id:"customizing-the-glyph",level:3},{value:"Usage",id:"usage",level:2},{value:"Create your own design",id:"create-your-own-design",level:2},{value:"TreeItem",id:"treeitem",level:3},{value:"TreeView",id:"treeview",level:3},{value:"API",id:"api",level:2},{value:"class: <code>TreeView</code>",id:"class-treeview",level:3},{value:"Superclass",id:"superclass",level:4},{value:"Fields",id:"fields",level:4},{value:"Methods",id:"methods",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Slots",id:"slots",level:4},{value:"Additional resources",id:"additional-resources",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["As defined by the ",(0,n.jsx)(t.a,{href:"https://w3c.github.io/aria/#tree",children:"W3C"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"A tree view widget presents a hierarchical list. Any item in the hierarchy may have child items, and items that have children may be expanded or collapsed to show or hide the children. For example, in a file system navigator that uses a tree view to display folders and files, an item representing a folder can be expanded to reveal the contents of the folder, which may be files, folders, or both."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(t.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import {\n    provideFASTDesignSystem,\n    fastTreeItem,\n    fastTreeView\n} from "@microsoft/fast-components";\n\nprovideFASTDesignSystem()\n    .register(\n        fastTreeItem(),\n        fastTreeView()\n    );\n'})}),"\n",(0,n.jsx)(t.h3,{id:"customizing-the-glyph",children:"Customizing the Glyph"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import {\n    provideFASTDesignSystem,\n    fastTreeItem,\n    fastTreeView\n} from "@microsoft/fast-components";\n\nprovideFASTDesignSystem()\n    .register(\n        fastTreeItem({\n            expandCollapseGlyph: `...your expand/collapse glyph`\n        }),\n        fastTreeView()\n    );\n'})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:"live",live:!0,children:"<fast-tree-view>\n    Root\n    <fast-tree-item>\n        Item 1\n        <fast-tree-item>Sub-item 1</fast-tree-item>\n        <fast-tree-item>Sub-item 2</fast-tree-item>\n    </fast-tree-item>\n    <fast-tree-item>Item 2</fast-tree-item>\n</fast-tree-view>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"create-your-own-design",children:"Create your own design"}),"\n",(0,n.jsx)(t.h3,{id:"treeitem",children:"TreeItem"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import {\n    treeItemTemplate as template,\n    TreeItem,\n    TreeItemOptions,\n} from "@microsoft/fast-foundation";\nimport { treeItemStyles as styles } from "./my-tree-item.styles";\n\nexport const myTreeItem = TreeItem.compose<TreeItemOptions>({\n    baseName: "tree-item",\n    template,\n    styles,\n    expandCollapseGlyph: `...default expand/collapse glyph`,\n});\n'})}),"\n",(0,n.jsx)(t.h3,{id:"treeview",children:"TreeView"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import { treeViewTemplate as template, TreeView } from "@microsoft/fast-foundation";\nimport { treeViewStyles as styles } from "./tree-view.styles";\n\nexport const myTreeView = TreeView.compose({\n    baseName: "tree-view",\n    template,\n    styles,\n});\n'})}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.h3,{id:"class-treeview",children:["class: ",(0,n.jsx)(t.code,{children:"TreeView"})]}),"\n",(0,n.jsx)(t.h4,{id:"superclass",children:"Superclass"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Module"}),(0,n.jsx)(t.th,{children:"Package"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FoundationElement"})}),(0,n.jsx)(t.td,{children:"/src/foundation-element/foundation-element.js"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Privacy"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"renderCollapsedNodes"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"/**   When true, the control will be appear expanded by user interaction."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"currentSelected"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"HTMLElement or TreeItem or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The currently selected tree item"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$presentation"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ComponentPresentation or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"A property which resolves the ComponentPresentation instance for the current component."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"template"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ElementViewTemplate or void or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"styles"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ElementStyles or void or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Privacy"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Return"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templateChanged"})}),(0,n.jsx)(t.td,{children:"protected"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"void"})}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"stylesChanged"})}),(0,n.jsx)(t.td,{children:"protected"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"void"})}),(0,n.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"render-collapsed-nodes"})}),(0,n.jsx)(t.td,{children:"renderCollapsedNodes"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"slots",children:"Slots"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The default slot for tree items"})]})})]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://explore.fast.design/components/fast-tree-view",children:"Component explorer examples"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tree-view/tree-view.spec.md",children:"Component technical specification"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria/#tree",children:"W3C Component Aria Practices"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(14041);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);