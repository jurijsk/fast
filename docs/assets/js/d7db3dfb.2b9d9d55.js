"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[59127],{2384:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var d=t(31085),n=t(71184);const i={id:"disclosure",title:"fast-disclosure",sidebar_label:"disclosure",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-disclosure.mdx",description:"fast-disclosure is a web component based on disclosure specification.",keywords:["fast-disclosure"]},l=void 0,r={id:"components/disclosure",title:"fast-disclosure",description:"fast-disclosure is a web component based on disclosure specification.",source:"@site/versioned_docs/version-1.x/components/fast-disclosure.mdx",sourceDirName:"components",slug:"/components/disclosure",permalink:"/docs/1.x/components/disclosure",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-disclosure.mdx",tags:[],version:"1.x",frontMatter:{id:"disclosure",title:"fast-disclosure",sidebar_label:"disclosure",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-disclosure.mdx",description:"fast-disclosure is a web component based on disclosure specification.",keywords:["fast-disclosure"]},sidebar:"docs",previous:{title:"dialog",permalink:"/docs/1.x/components/dialog"},next:{title:"divider",permalink:"/docs/1.x/components/divider"}},c={},o=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create your own design",id:"create-your-own-design",level:2},{value:"API",id:"api",level:2},{value:"class: <code>Disclosure</code>",id:"class-disclosure",level:3},{value:"Superclass",id:"superclass",level:4},{value:"Fields",id:"fields",level:4},{value:"Methods",id:"methods",level:4},{value:"Events",id:"events",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Slots",id:"slots",level:4},{value:"Additional resources",id:"additional-resources",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["A disclosure component is the implementation of native ",(0,d.jsx)(s.code,{children:"details"})," and ",(0,d.jsx)(s.code,{children:"summary"})," controls that toggles the visibility of the extra content. Visually, it would look like a button or hyperlink and beneath extra content. As defined by the W3C:"]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"A disclosure is a button that controls the visibility of a section of content. When the controlled content is hidden, it is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content. When the content is visible, the arrow or triangle typically points down."}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:'import {\n    provideFASTDesignSystem,\n    fastDisclosure\n} from "@microsoft/fast-components";\n\nprovideFASTDesignSystem()\n    .register(\n        fastDisclosure()\n    );\n'})}),"\n",(0,d.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-html",metastring:"live",live:!0,children:'<fast-disclosure appearance="lightweight">\n    <strong slot="title">Read about FAST</strong>\n    <div>\n        FAST is a collection of technologies built on Web Components and modern Web Standards, designed to help you efficiently tackle some of the most common challenges in website and application design and development.\n    </div>\n</fast-disclosure>\n'})}),"\n",(0,d.jsx)(s.h2,{id:"create-your-own-design",children:"Create your own design"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:'import {\n    Disclosure,\n    disclosureTemplate as template,\n} from "@microsoft/fast-foundation";\nimport { disclosureStyles as styles } from "./my-disclosure.styles";\n\nexport const myDisclosure = Disclosure.compose({\n    baseName: "disclosure",\n    template,\n    styles,\n});\n'})}),"\n",(0,d.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,d.jsxs)(s.h3,{id:"class-disclosure",children:["class: ",(0,d.jsx)(s.code,{children:"Disclosure"})]}),"\n",(0,d.jsx)(s.h4,{id:"superclass",children:"Superclass"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Module"}),(0,d.jsx)(s.th,{children:"Package"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"FoundationElement"})}),(0,d.jsx)(s.td,{children:"/src/foundation-element/foundation-element.js"}),(0,d.jsx)(s.td,{})]})})]}),"\n",(0,d.jsx)(s.h4,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Privacy"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Default"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"Inherited From"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"expanded"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Determines if the element should show the extra content or not."}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Invoker title"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"$presentation"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ComponentPresentation or null"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"A property which resolves the ComponentPresentation instance for the current component."}),(0,d.jsx)(s.td,{children:"FoundationElement"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"template"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ElementViewTemplate or void or null"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition."}),(0,d.jsx)(s.td,{children:"FoundationElement"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"styles"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"ElementStyles or void or null"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition."}),(0,d.jsx)(s.td,{children:"FoundationElement"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"methods",children:"Methods"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Privacy"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"Parameters"}),(0,d.jsx)(s.th,{children:"Return"}),(0,d.jsx)(s.th,{children:"Inherited From"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"show"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:"Show extra content."}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"hide"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:"Hide extra content."}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"toggle"})}),(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:"Toggle the current(expanded/collapsed) state."}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"setup"})}),(0,d.jsx)(s.td,{children:"protected"}),(0,d.jsx)(s.td,{children:"Register listener and set default disclosure mode"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"onToggle"})}),(0,d.jsx)(s.td,{children:"protected"}),(0,d.jsx)(s.td,{children:"Update the aria attr and fire `toggle` event"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"templateChanged"})}),(0,d.jsx)(s.td,{children:"protected"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{children:"FoundationElement"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"stylesChanged"})}),(0,d.jsx)(s.td,{children:"protected"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})}),(0,d.jsx)(s.td,{children:"FoundationElement"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"events",children:"Events"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"Inherited From"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"toggle"})}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"fires a toggle event when the summary is toggled"}),(0,d.jsx)(s.td,{})]})})]}),"\n",(0,d.jsx)(s.h4,{id:"attributes",children:"Attributes"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Field"}),(0,d.jsx)(s.th,{children:"Inherited From"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"expanded"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"title"}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Name"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"start"})}),(0,d.jsx)(s.td,{children:"Content which can be provided before the summary content"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"end"})}),(0,d.jsx)(s.td,{children:"Content which can be provided after the summary content"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"title"})}),(0,d.jsx)(s.td,{children:"The summary content"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"The default slot for the disclosure content"})]})]})]}),"\n",(0,d.jsx)("hr",{}),"\n",(0,d.jsx)(s.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://explore.fast.design/components/fast-disclosure",children:"Component explorer examples"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/disclosure/disclosure.spec.md",children:"Component technical specification"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"https://w3c.github.io/aria-practices/#disclosure",children:"W3C Component Aria Practices"})}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},71184:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var d=t(14041);const n={},i=d.createContext(n);function l(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);