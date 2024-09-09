"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[60972],{90875:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(31085),n=t(71184);const i={id:"fast-foundation.resolverbuilder",title:"ResolverBuilder class",hide_title:!0},d=void 0,o={id:"api/fast-foundation.resolverbuilder",title:"ResolverBuilder class",description:"@microsoft/fast-foundation &gt; ResolverBuilder",source:"@site/versioned_docs/version-1.x/api/fast-foundation.resolverbuilder.md",sourceDirName:"api",slug:"/api/fast-foundation.resolverbuilder",permalink:"/docs/1.x/api/fast-foundation.resolverbuilder",draft:!1,unlisted:!1,tags:[],version:"1.x",frontMatter:{id:"fast-foundation.resolverbuilder",title:"ResolverBuilder class",hide_title:!0}},l={},a=[{value:"ResolverBuilder class",id:"resolverbuilder-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation",children:"@microsoft/fast-foundation"})," > ",(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder",children:"ResolverBuilder"})]}),"\n",(0,r.jsx)(s.h2,{id:"resolverbuilder-class",children:"ResolverBuilder class"}),"\n",(0,r.jsx)(s.p,{children:"A utility class used that constructs and registers resolvers for a dependency injection container. Supports a standard set of object lifetimes."}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare class ResolverBuilder<K> \n"})}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constructor"}),(0,r.jsx)(s.th,{children:"Modifiers"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder._constructor_",children:"(constructor)(container, key)"})}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:["Constructs a new instance of the ",(0,r.jsx)("code",{children:"ResolverBuilder"})," class"]})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Method"}),(0,r.jsx)(s.th,{children:"Modifiers"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.aliasto",children:"aliasTo(destinationKey)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Aliases the current key to a different key."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.cachedcallback",children:"cachedCallback(value)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Creates a resolver that invokes a callback function the first time that a dependency resolution is requested. The returned value is then cached and provided for all subsequent requests."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.callback",children:"callback(value)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Creates a resolver that invokes a callback function for every dependency resolution request, allowing custom logic to return the dependency."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.instance",children:"instance(value)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Creates a resolver for an existing object instance."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.singleton",children:"singleton(value)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Creates a resolver that enforces a singleton lifetime."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/1.x/api/fast-foundation.resolverbuilder.transient",children:"transient(value)"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Creates a resolver that creates a new instance for every dependency request."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},71184:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var r=t(14041);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);