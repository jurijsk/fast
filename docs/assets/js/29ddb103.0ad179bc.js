"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[3936],{62727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(31085),a=t(71184);const o={id:"fast-foundation.di",title:"DI variable",hide_title:!0},r=void 0,s={id:"api/fast-foundation.di",title:"DI variable",description:"@microsoft/fast-foundation &gt; DI",source:"@site/versioned_docs/version-1.x/api/fast-foundation.di.md",sourceDirName:"api",slug:"/api/fast-foundation.di",permalink:"/docs/1.x/api/fast-foundation.di",draft:!1,unlisted:!1,tags:[],version:"1.x",frontMatter:{id:"fast-foundation.di",title:"DI variable",hide_title:!0}},d={},c=[{value:"DI variable",id:"di-variable",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/1.x/api/fast-foundation",children:"@microsoft/fast-foundation"})," > ",(0,i.jsx)(n.a,{href:"/docs/1.x/api/fast-foundation.di",children:"DI"})]}),"\n",(0,i.jsx)(n.h2,{id:"di-variable",children:"DI variable"}),"\n",(0,i.jsx)(n.p,{children:"The gateway to dependency injection APIs."}),"\n",(0,i.jsx)("b",{children:"Signature:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'DI: Readonly<{\n    createContainer(config?: Partial<ContainerConfiguration> | undefined): Container;\n    findResponsibleContainer(node: Node): Container;\n    findParentContainer(node: Node): Container;\n    getOrCreateDOMContainer(node?: Node | undefined, config?: Partial<Omit<ContainerConfiguration, "parentLocator">> | undefined): Container;\n    getDesignParamtypes: (Type: Constructable | Injectable) => readonly Key[] | undefined;\n    getAnnotationParamtypes: (Type: Constructable | Injectable) => readonly Key[] | undefined;\n    getOrCreateAnnotationParamTypes(Type: Constructable | Injectable): Key[];\n    getDependencies(Type: Constructable | Injectable): Key[];\n    defineProperty(target: {}, propertyName: string, key: Key, respectConnection?: boolean): void;\n    createInterface<K extends Key>(nameConfigOrCallback?: string | InterfaceConfiguration | ((builder: ResolverBuilder<K>) => Resolver<K>) | undefined, configuror?: ((builder: ResolverBuilder<K>) => Resolver<K>) | undefined): InterfaceSymbol<K>;\n    inject(...dependencies: Key[]): (target: any, key?: string | number | undefined, descriptor?: number | PropertyDescriptor | undefined) => void;\n    transient<T extends Constructable<{}>>(target: T & Partial<RegisterSelf<T>>): T & RegisterSelf<T>;\n    singleton<T_1 extends Constructable<{}>>(target: T_1 & Partial<RegisterSelf<T_1>>, options?: SingletonOptions): T_1 & RegisterSelf<T_1>;\n}>\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(14041);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);