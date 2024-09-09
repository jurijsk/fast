"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[59171],{31312:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(31085),d=s(71184);const r={id:"avatar",title:"fast-avatar",sidebar_label:"avatar",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-avatar.mdx",description:"fast-avatar is a web component used to graphically represent a user or an object.",keywords:["fast-avatar"]},a=void 0,i={id:"components/avatar",title:"fast-avatar",description:"fast-avatar is a web component used to graphically represent a user or an object.",source:"@site/versioned_docs/version-1.x/components/fast-avatar.mdx",sourceDirName:"components",slug:"/components/avatar",permalink:"/docs/1.x/components/avatar",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-avatar.mdx",tags:[],version:"1.x",frontMatter:{id:"avatar",title:"fast-avatar",sidebar_label:"avatar",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-avatar.mdx",description:"fast-avatar is a web component used to graphically represent a user or an object.",keywords:["fast-avatar"]},sidebar:"docs",previous:{title:"anchored-region",permalink:"/docs/1.x/components/anchored-region"},next:{title:"badge",permalink:"/docs/1.x/components/badge"}},l={},c=[{value:"Setup",id:"setup",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Custom Media",id:"custom-media",level:3},{value:"Usage",id:"usage",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Used with a Badge",id:"used-with-a-badge",level:3},{value:"Filled, Colored, and Shaped",id:"filled-colored-and-shaped",level:3},{value:"Create your own design",id:"create-your-own-design",level:2},{value:"API",id:"api",level:2},{value:"class: <code>Avatar</code>",id:"class-avatar",level:3},{value:"Superclass",id:"superclass",level:4},{value:"Fields",id:"fields",level:4},{value:"Methods",id:"methods",level:4},{value:"Attributes",id:"attributes",level:4},{value:"CSS Parts",id:"css-parts",level:4},{value:"Slots",id:"slots",level:4},{value:"Additional resources",id:"additional-resources",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fast-avatar"})," component is used to graphically represent a user or an object."]}),"\n",(0,n.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(t.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import {\n    provideFASTDesignSystem,\n    fastAnchoredRegion\n} from "@microsoft/fast-components";\n\nprovideFASTDesignSystem()\n    .register(\n        fastAvatar()\n    );\n'})}),"\n",(0,n.jsx)(t.h3,{id:"custom-media",children:"Custom Media"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import { Avatar } from "@microsoft/fast-foundation";\nimport {\n    provideFASTDesignSystem,\n    fastAnchoredRegion\n} from "@microsoft/fast-components";\n\nconst imgTemplate = html<Avatar>`\n    ...your own template that controls rendering images...\n`;\n\nprovideFASTDesignSystem()\n    .register(\n        fastAvatar({\n          media: imgTemplate\n        })\n    );\n'})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<fast-avatar\n  src="..."\n  alt="..."\n  link="...">\n</fast-avatar>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"used-with-a-badge",children:"Used with a Badge"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<fast-avatar\n  src="..."\n  alt="..."\n  link="...">\n  <fast-badge slot="badge">&nbsp</fast-badge>\n</fast-avatar>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"filled-colored-and-shaped",children:"Filled, Colored, and Shaped"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fill"})," and ",(0,n.jsx)(t.code,{children:"color"})," attributes of the ",(0,n.jsx)(t.em,{children:"avatar"})," create CSS custom properties which can be used to style the control."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",children:"fast-avatar {\n    --avatar-fill-primary: #00FF00;\n    --avatar-fill-danger: #FF0000;\n    --avatar-color-light: #FFFFFF;\n    --avatar-color-dark: #000000;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["While the ",(0,n.jsx)(t.code,{children:"shape"})," attribute lets you choose between ",(0,n.jsx)(t.code,{children:"circle"})," (default) or ",(0,n.jsx)(t.code,{children:"square"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<fast-avatar\n  src="..."\n  alt="..."\n  link="..."\n  fill="primary"\n  color="dark"\n  shape="square">\n</fast-avatar>\n'})}),"\n",(0,n.jsx)(t.h2,{id:"create-your-own-design",children:"Create your own design"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import {\n    AvatarOptions,\n    Avatar,\n    avatarTemplate as template,\n} from "@microsoft/fast-foundation";\nimport { avatarStyles as styles } from "./my-avatar.styles";\n\nexport const myAvatar = Avatar.compose<AvatarOptions>({\n    baseName: "avatar",\n    template,\n    styles,\n    media: imgTemplate,\n    shadowOptions: {\n        delegatesFocus: true,\n    },\n});\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This component is built with the expectation that focus is delegated to the anchor element rendered into the shadow DOM."})}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.h3,{id:"class-avatar",children:["class: ",(0,n.jsx)(t.code,{children:"Avatar"})]}),"\n",(0,n.jsx)(t.h4,{id:"superclass",children:"Superclass"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Module"}),(0,n.jsx)(t.th,{children:"Package"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FoundationElement"})}),(0,n.jsx)(t.td,{children:"/src/foundation-element/foundation-element.js"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Privacy"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fill"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Indicates the Avatar should have a color fill."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"color"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Indicates the Avatar should have a text color."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"link"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Indicates the Avatar should have url link"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"shape"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvatarShape"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Indicates the Avatar shape should be. By default it will be set to "circle".'}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$presentation"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ComponentPresentation or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"A property which resolves the ComponentPresentation instance for the current component."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"template"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ElementViewTemplate or void or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"styles"})}),(0,n.jsx)(t.td,{children:"public"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ElementStyles or void or null"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition."}),(0,n.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Privacy"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Return"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templateChanged"})}),(0,n.jsx)(t.td,{children:"protected"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"void"})}),(0,n.jsx)(t.td,{children:"FoundationElement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"stylesChanged"})}),(0,n.jsx)(t.td,{children:"protected"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"void"})}),(0,n.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Inherited From"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fill"})}),(0,n.jsx)(t.td,{children:"fill"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"color"})}),(0,n.jsx)(t.td,{children:"color"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"link"})}),(0,n.jsx)(t.td,{children:"link"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"shape"})}),(0,n.jsx)(t.td,{children:"shape"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"backplate"})}),(0,n.jsx)(t.td,{children:"The wrapping container for the avatar"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"link"})}),(0,n.jsx)(t.td,{children:"The avatar link"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"media"})}),(0,n.jsx)(t.td,{children:"The media slot"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"content"})}),(0,n.jsx)(t.td,{children:"The default slot"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"slots",children:"Slots"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"media"})}),(0,n.jsx)(t.td,{children:"Used for media such as an image"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The default slot for avatar text, commonly a name or initials"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"badge"})}),(0,n.jsx)(t.td,{children:"Used to provide a badge, such as a status badge"})]})]})]}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://explore.fast.design/components/fast-avatar",children:"Component explorer examples"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/avatar/avatar.spec.md",children:"Component technical specification"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://open-ui.org/components/avatar.research",children:"Open UI Analysis"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(14041);const d={},r=n.createContext(d);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);