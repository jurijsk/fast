"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[95563],{29461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(31085),a=n(71184);const o={id:"fast-foundation.registration",title:"Registration variable",hide_title:!0},s=void 0,r={id:"api/fast-foundation.registration",title:"Registration variable",description:"@microsoft/fast-foundation &gt; Registration",source:"@site/versioned_docs/version-1.x/api/fast-foundation.registration.md",sourceDirName:"api",slug:"/api/fast-foundation.registration",permalink:"/docs/1.x/api/fast-foundation.registration",draft:!1,unlisted:!1,tags:[],version:"1.x",frontMatter:{id:"fast-foundation.registration",title:"Registration variable",hide_title:!0}},c={},l=[{value:"Registration variable",id:"registration-variable",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/1.x/api/fast-foundation",children:"@microsoft/fast-foundation"})," > ",(0,i.jsx)(t.a,{href:"/docs/1.x/api/fast-foundation.registration",children:"Registration"})]}),"\n",(0,i.jsx)(t.h2,{id:"registration-variable",children:"Registration variable"}),"\n",(0,i.jsx)(t.p,{children:"You can use the resulting Registration of any of the factory methods to register with the container."}),"\n",(0,i.jsx)("b",{children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"Registration: Readonly<{\n    instance<T>(key: Key, value: T): Registration<T>;\n    singleton<T_1 extends Constructable<{}>>(key: Key, value: T_1): Registration<InstanceType<T_1>>;\n    transient<T_2 extends Constructable<{}>>(key: Key, value: T_2): Registration<InstanceType<T_2>>;\n    callback<T_3>(key: Key, callback: ResolveCallback<T_3>): Registration<Resolved<T_3>>;\n    cachedCallback<T_4>(key: Key, callback: ResolveCallback<T_4>): Registration<Resolved<T_4>>;\n    aliasTo<T_5>(originalKey: T_5, aliasKey: Key): Registration<Resolved<T_5>>;\n}>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"class Foo {}\nconst container = DI.createContainer();\ncontainer.register(Registration.instance(Foo, new Foo()));\ncontainer.get(Foo);\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(14041);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);