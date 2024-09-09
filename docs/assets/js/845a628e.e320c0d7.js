"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[44380],{70048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(31085),o=n(71184);const i={id:"aspnet",title:"ASP.NET",sidebar_label:"ASP.NET",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/integrations/aspnet.md",description:"FAST works naturally with ASP.NET server-side development, by simply adding a script tag and using the custom HTML elements. Let's take a look at how to set things up.",keywords:["asp.net"]},a=void 0,r={id:"integrations/aspnet",title:"ASP.NET",description:"FAST works naturally with ASP.NET server-side development, by simply adding a script tag and using the custom HTML elements. Let's take a look at how to set things up.",source:"@site/versioned_docs/version-1.x/integrations/aspnet.md",sourceDirName:"integrations",slug:"/integrations/aspnet",permalink:"/docs/1.x/integrations/aspnet",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/integrations/aspnet.md",tags:[],version:"1.x",frontMatter:{id:"aspnet",title:"ASP.NET",sidebar_label:"ASP.NET",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/integrations/aspnet.md",description:"FAST works naturally with ASP.NET server-side development, by simply adding a script tag and using the custom HTML elements. Let's take a look at how to set things up.",keywords:["asp.net"]},sidebar:"docs",previous:{title:"Angular",permalink:"/docs/1.x/integrations/angular"},next:{title:"Aurelia",permalink:"/docs/1.x/integrations/aurelia"}},c={},l=[{value:"Setting up the ASP.NET project",id:"setting-up-the-aspnet-project",level:2},{value:"Configuring scripts",id:"configuring-scripts",level:2},{value:"Using the components",id:"using-the-components",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"FAST works naturally with ASP.NET server-side development, by simply adding a script tag and using the custom HTML elements. Let's take a look at how to set things up."}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-the-aspnet-project",children:"Setting up the ASP.NET project"}),"\n",(0,s.jsxs)(t.p,{children:["First, you'll need to make sure that you have the .NET SDK installed. You can learn more and download that ",(0,s.jsx)(t.a,{href:"https://dotnet.microsoft.com/download",children:"on the official site"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["With the SDK installed, you have access to the ",(0,s.jsx)(t.code,{children:"dotnet"}),' command-line interface. This can be used to create a new ASP.NET project. For example, to create a new ASP.NET Core MVC Web App named "fast-aspnet", you would use the following command:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"dotnet new mvc -o fast-aspnet\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create a project using the command above if you don't already have one. When the CLI completes, you should have a basic runnable ASP.NET Core MVC application."}),"\n",(0,s.jsx)(t.h2,{id:"configuring-scripts",children:"Configuring scripts"}),"\n",(0,s.jsx)(t.p,{children:"Now that we've got our basic project setup, we need to add our web components script and update ASP.NET accordingly. You can either add the script from our CDN directly, or you can install it with NPM and then add that."}),"\n",(0,s.jsxs)(t.p,{children:["To add a CDN script for ",(0,s.jsx)(t.code,{children:"fast-components"})," use the following markup:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<script type="module" src="https://cdn.jsdelivr.net/npm/@microsoft/fast-components/dist/fast-components.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(t.p,{children:"The markup above always references the latest release of the components. When deploying to production, you will want to ship with a specific version. Here's an example of the markup for that:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<script type="module" src="https://cdn.jsdelivr.net/npm/@microsoft/fast-components@2.16.0/dist/fast-components.min.js"><\/script>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The best place to put this is typically in your ",(0,s.jsx)(t.code,{children:"_Layout.cshtml"})," file in the script section at the bottom of the ",(0,s.jsx)(t.code,{children:"<body>"}),". Be sure to use double ",(0,s.jsx)(t.code,{children:"@"})," if you are placing this script in any of the files with ",(0,s.jsx)(t.code,{children:"cshtml"})," extension as compiler will treat it with Razor directive:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<script type="module" src="https://cdn.jsdelivr.net/npm/@@microsoft/fast-components/dist/fast-components.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you wish to leverage NPM instead, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npm install --save @microsoft/fast-components\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can locate the single file script build in the following location:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"node_modules/@microsoft/fast-components/dist/fast-components.min.js\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Copy this to your ",(0,s.jsx)(t.code,{children:"wwwroot/js"})," folder and reference it with a script tag as described above."]}),"\n",(0,s.jsxs)(t.p,{children:["Should you wish to go one step further and leverage a client-side bundler, such as Webpack, there is some additional setup to integrate with ASP.NET that is beyond the scope of this tutorial. Basic Webpack instructions for FAST can be found ",(0,s.jsx)(t.a,{href:"/docs/1.x/integrations/webpack",children:"here"}),". The most important detail with respect to FAST is that you'll want to install a few more packages. Use the following command if this is your preferred setup:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npm install --save @microsoft/fast-components @microsoft/fast-element\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this case, because Webpack can tree-shake unused components, you'll also want to be sure to register the components you want to use somewhere in your own JavaScript code. See ",(0,s.jsx)(t.a,{href:"/docs/1.x/integrations/webpack",children:"our Webpack guide"})," for an example."]}),"\n",(0,s.jsx)(t.h2,{id:"using-the-components",children:"Using the components"}),"\n",(0,s.jsxs)(t.p,{children:["With your script tag added (or your client bundle in place), you can use any component in any of your views. For example, you could put something like this in your ",(0,s.jsx)(t.code,{children:"Index.cshtml"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'@{\n    ViewData["Title"] = "Home Page";\n}\n\n<fast-card>\n  <h2>@ViewData["Title"]</h2>\n  <fast-button id="button" appearance="accent">Click Me</fast-button>\n</fast-card>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For a splash of style, add the following to your ",(0,s.jsx)(t.code,{children:"wwwroot/css/site.css"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:":not(:defined) {\n  visibility: hidden;\n}\n\nfast-card {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n}\n\nh2 {\n  font-size: var(--type-ramp-plus-5-font-size);\n  line-height: var(--type-ramp-plus-5-line-height);\n}\n\n#button {\n  align-self: flex-end;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You're now set up to use FAST with ASP.NET. You can use more components, build your own components, and when you are ready, build and deploy your website or app to production."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(14041);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);