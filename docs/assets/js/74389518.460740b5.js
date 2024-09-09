"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[99630],{82486:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var o=s(31085),i=s(71184);const n={id:"match-media-stylesheets",title:"MatchMedia Stylesheets",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/design/match-media-stylesheets.md",description:"FAST exposes a mechanism to attach stylesheets conditionally based on a MatchMedia query.",keywords:["MatchMedia stylesheets"]},a=void 0,c={id:"design/match-media-stylesheets",title:"MatchMedia Stylesheets",description:"FAST exposes a mechanism to attach stylesheets conditionally based on a MatchMedia query.",source:"@site/versioned_docs/version-1.x/design/match-media-stylesheets.md",sourceDirName:"design",slug:"/design/match-media-stylesheets",permalink:"/docs/1.x/design/match-media-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/design/match-media-stylesheets.md",tags:[],version:"1.x",frontMatter:{id:"match-media-stylesheets",title:"MatchMedia Stylesheets",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/design/match-media-stylesheets.md",description:"FAST exposes a mechanism to attach stylesheets conditionally based on a MatchMedia query.",keywords:["MatchMedia stylesheets"]},sidebar:"docs",previous:{title:"High Contrast",permalink:"/docs/1.x/design-systems/high-contrast"},next:{title:"Localization",permalink:"/docs/1.x/design/localization"}},r={},h=[{value:"MatchMedia stylesheets",id:"matchmedia-stylesheets",level:3},{value:"Forced-colors stylesheets",id:"forced-colors-stylesheets",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["FAST exposes a mechanism to attach stylesheets conditionally based on a ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"MatchMedia"})," query."]}),"\n",(0,o.jsx)(t.h3,{id:"matchmedia-stylesheets",children:"MatchMedia stylesheets"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"MatchMediaStylesheetBehavior"})," can be used to attach a stylesheet when a ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList",children:"MediaQueryList"})," matches and detach it when the query un-matches."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["Example: Constructing the ",(0,o.jsx)(t.code,{children:"MatchMediaStyleSheetBehavior"})]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { MatchMediaStyleSheetBehavior } from \"@microsoft/fast-foundation\";\n\nconst mobileStylesheetBehavior = new MatchMediaStyleSheetBehavior(\n    Window.matchMedia('(max-width: 600px)'),\n    css`\n        body {\n            color: red;\n        }\n    `\n));\n\nconst styles = css`\n    /* ... */\n`.withBehaviors(\n    mobileStylesheetBehavior    \n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"MatchMediaStyleSheetBehavior"})," can also be used to curry the ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList",children:"MediaQueryList"}),". This can be useful for defining commonly-used ",(0,o.jsx)(t.code,{children:"MatchMediaStyleSheetBehavior"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example: Re-using a commonly used query"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { MatchMediaStyleSheetBehavior } from \"@microsoft/fast-foundation\";\n\nconst mobileStylesheetBehavior = MatchMediaStyleSheetBehavior.with(\n    Window.matchMedia('(max-width: 600px)')\n);\nconst styles = css`\n    /* ... */\n`.withBehaviors(\n    mobileStylesheetBehavior(css`\n        body {\n            color: red;\n        }\n    `)\n)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"forced-colors-stylesheets",children:"Forced-colors stylesheets"}),"\n",(0,o.jsxs)(t.p,{children:["FAST has a commitment to facilitating accessible web experiences and ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors",children:"forced-colors"})," support is a core tenant of that commitment. ",(0,o.jsx)(t.code,{children:"@microsoft/fast-components"})," exports the ",(0,o.jsx)(t.code,{children:"forcedColorsStylesheetBehavior"})," utility to provide a simple mechanism to apply forced-color stylesheets without bloating the component stylesheet in non-forced-color environments. This Behavior is built using ",(0,o.jsx)(t.a,{href:"#matchmedia-stylesheets",children:"MatchMedia Stylesheets"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example: Forced-colors stylesheets"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'import { forcedColorsStylesheetBehavior } from "@microsoft/fast-foundation";\nimport { SystemColors } from "@microsoft/fast-web-utilities";\nconst styles = css`\n    /* ... */\n`.withBehaviors(\n    forcedColorsStylesheetBehavior(css`\n        :host {\n            background: ${SystemColors.Canvas};\n            color: ${SystemColors.CanvasText};\n        }\n        /* ... */\n    `)\n)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var o=s(14041);const i={},n=o.createContext(i);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);