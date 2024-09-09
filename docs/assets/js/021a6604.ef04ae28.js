"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[44623],{76422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(31085),l=n(71184);const r={id:"html-templates",title:"HTML Templates",sidebar_label:"HTML Templates",keywords:["html","template","web components"]},o="HTML Templates",a={id:"getting-started/html-templates",title:"HTML Templates",description:"The @microsoft/fast-element package offers a named export html which is a tag template literal. It can be used to create HTML snippets which will become your web components shadow DOM.",source:"@site/docs/getting-started/html-templates.md",sourceDirName:"getting-started",slug:"/getting-started/html-templates",permalink:"/docs/getting-started/html-templates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"html-templates",title:"HTML Templates",sidebar_label:"HTML Templates",keywords:["html","template","web components"]},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"},next:{title:"HTML Directives",permalink:"/docs/getting-started/html-directives"}},i={},c=[{value:"Binding",id:"binding",level:2},{value:"Booleans",id:"booleans",level:3},{value:"Events",id:"events",level:3},{value:"Properties",id:"properties",level:3},{value:"Typed Templates",id:"typed-templates",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"html-templates",children:"HTML Templates"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@microsoft/fast-element"})," package offers a named export ",(0,s.jsx)(t.code,{children:"html"})," which is a ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",children:"tag template literal"}),". It can be used to create HTML snippets which will become your web components shadow DOM."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { html } from "@microsoft/fast-element";\n\nexport const template = html`\n  <template>Hello world</template>\n`;\n'})}),"\n",(0,s.jsx)(t.h2,{id:"binding",children:"Binding"}),"\n",(0,s.jsxs)(t.p,{children:["When working with the ",(0,s.jsx)(t.code,{children:"html"})," template, bindings allow more complex behavior than simply passing attributes. These bindings are dynamic and are denoted by the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",children:"arrow function"}),". By default attributes are assumed to be strings. We typically denote ",(0,s.jsx)(t.code,{children:"x"})," for the element, and ",(0,s.jsx)(t.code,{children:"c"})," for the context."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { FASTElement, attr, html } from '@microsoft/fast-element';\n\nconst template = html<NameTag>`\n  <h3>${x => x.greeting.toUpperCase()}</h3>\n`;\n\nexport class NameTag extends FASTElement {\n  @attr\n  greeting: string = 'hello';\n}\n\nNameTag.define({\n  name: 'name-tag',\n  template\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"When the greeting attribute is updated, so will the template."}),"\n",(0,s.jsx)(t.h3,{id:"booleans",children:"Booleans"}),"\n",(0,s.jsxs)(t.p,{children:["Boolean bindings use the ",(0,s.jsx)(t.code,{children:"?"})," symbol, use these for Boolean attributes."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { html } from "@microsoft/fast-element";\n\nexport const template = html`\n  <button\n    ?disabled="${(x) => x.disabled}"\n  >\n    Button\n  </button>\n`;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.p,{children:["Events bindings use the ",(0,s.jsx)(t.code,{children:"@"})," symbol. All Element events are available see the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element#events",children:"MDN documentation"})," for details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { html } from "@microsoft/fast-element";\n\nexport const template = html`\n  <button\n    @click="${(x, c) => x.clickHandler(c.event)}"\n  >\n    Button\n  </button>\n`;\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["After your event handler is executed, ",(0,s.jsx)(t.code,{children:"preventDefault()"})," will be called on the event object by default. You can return ",(0,s.jsx)(t.code,{children:"true"})," from your handler to opt-out of this behavior."]})}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.p,{children:["Property bindings use the ",(0,s.jsx)(t.code,{children:":"})," symbol."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { html } from "@microsoft/fast-element";\n\nexport const template = html`\n  <input\n    :value="${(x) => x.value}"\n  />\n`;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Some complex use cases include binding to a custom property, updating that property and observing it. To learn more about observing properties, check out the ",(0,s.jsx)(t.a,{href:"/docs/getting-started/fast-element",children:"FASTElement"})," document."]}),"\n",(0,s.jsx)(t.h2,{id:"typed-templates",children:"Typed Templates"}),"\n",(0,s.jsxs)(t.p,{children:["Your templates can be typed to the data model that they are rendering over. In TypeScript, we provide the type as part of the tag: ",(0,s.jsx)(t.code,{children:"html<NameTag>"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { html } from '@microsoft/fast-element';\n\nconst template = html<NameTag>`\n  <div>${x => x.greeting}</div>\n`;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(14041);const l={},r=s.createContext(l);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);