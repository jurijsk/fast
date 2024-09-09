(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[72053],{72053:(e,t,n)=>{"use strict";n.d(t,{A:()=>O});var s=n(14041),o=n(90213),c=n(54357),r=n(48408),a=n(57473),l=n(11431),i=n.n(l);const u=/title=(?<quote>["'])(?<title>.*?)\1/,d=/\{(?<range>[\d,-]+)\}/,m={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},p={...m,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(m);function h(e,t){const n=e.map((e=>{const{start:n,end:s}=p[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function f(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&d.test(c)){const e=c.match(d).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=o[0].className,s=i()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return h(["tex"],t);case"lua":case"haskell":case"sql":return h(["lua"],t);case"wasm":return h(["wasm"],t);case"vb":case"vba":case"visual-basic":return h(["vb","rem"],t);case"vbnet":return h(["vbnet","rem"],t);case"batch":return h(["rem"],t);case"basic":return h(["rem","f90"],t);case"fsharp":return h(["js","ml"],t);case"ocaml":case"sml":return h(["ml"],t);case"fortran":return h(["f90"],t);case"cobol":return h(["cobol"],t);default:return h(b,t)}}(s,o),a=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),u=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let i=0;i<a.length;){const e=a[i].match(r);if(!e){i+=1;continue}const t=e.slice(1).find((e=>void 0!==e));u[t]?l[u[t]].range+=i+",":m[t]?l[m[t]].start=i:p[t]&&(l[p[t]].range+=l[p[t]].start+"-"+(i-1)+","),a.splice(i,1)}n=a.join("\n");const f={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;i()(n).forEach((e=>{null!=f[e]||(f[e]=[]),f[e].push(t)}))})),{lineClassNames:f,code:n}}const g={codeBlockContainer:"codeBlockContainer_ZGJx"};var k=n(31085);function B(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=t[s];c&&"string"==typeof o&&(n[c]=o)})),n}((0,r.A)());return(0,k.jsx)(t,{...n,style:s,className:(0,c.A)(n.className,g.codeBlockContainer,a.G.common.codeBlock)})}const v={codeBlockContent:"codeBlockContent_qZBB",codeBlockTitle:"codeBlockTitle_zAEH",codeBlock:"codeBlock_TAPP",codeBlockStandalone:"codeBlockStandalone_K9VJ",codeBlockLines:"codeBlockLines_AdAo",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_p5De",buttonGroup:"buttonGroup_TNwR"};function j(e){let{children:t,className:n}=e;return(0,k.jsx)(B,{as:"pre",tabIndex:0,className:(0,c.A)(v.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:v.codeBlockLines,children:t})})}var x=n(2520),y=n(51786);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=N);const o=(0,y._q)(t),c=(0,y.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(74370);const L={codeLine:"codeLine_DPDv",codeLineNumber:"codeLineNumber_YxQB",codeLineContent:"codeLineContent_SOIp"};function E(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,c.A)(n,s&&L.codeLine)}),l=t.map(((e,t)=>(0,k.jsx)("span",{...r({token:e})},t)));return(0,k.jsxs)("span",{...a,children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:L.codeLineNumber}),(0,k.jsx)("span",{className:L.codeLineContent,children:l})]}):l,(0,k.jsx)("br",{})]})}var A=n(49082);function T(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const _={copyButtonCopied:"copyButtonCopied_Mzdr",copyButtonIcons:"copyButtonIcons_MVhB",copyButtonIcon:"copyButtonIcon_yxgH",copyButtonSuccessIcon:"copyButtonSuccessIcon_QJLJ"};function I(e){let{code:t,className:n}=e;const[o,r]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}s.remove(),r&&(c.removeAllRanges(),c.addRange(r)),o&&o.focus()}(t),r(!0),a.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":o?(0,A.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",n,_.copyButton,o&&_.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:_.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(T,{className:_.copyButtonIcon}),(0,k.jsx)(S,{className:_.copyButtonSuccessIcon})]})})}function W(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const H={wordWrapButtonIcon:"wordWrapButtonIcon_SMj9",wordWrapButtonEnabled:"wordWrapButtonEnabled_vR9E"};function M(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,A.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,c.A)("clean-btn",t,s&&H.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,k.jsx)(W,{className:H.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){var t;let{children:n,className:o="",metastring:a,title:l,showLineNumbers:i,language:d}=e;const{prism:{defaultLanguage:m,magicComments:p}}=(0,x.p)(),b=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=d?d:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(o))?t:m),h=(0,r.A)(),g=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),r=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return C(c,a),(0,s.useEffect)((()=>{a()}),[e,a]),(0,s.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),j=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(u))?void 0:n.groups.title)?t:""}(a)||l,{lineClassNames:y,code:N}=f(n,{metastring:a,language:b,magicComments:p}),L=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(a);return(0,k.jsxs)(B,{as:"div",className:(0,c.A)(o,b&&!o.includes("language-"+b)&&"language-"+b),children:[j&&(0,k.jsx)("div",{className:v.codeBlockTitle,children:j}),(0,k.jsxs)("div",{className:v.codeBlockContent,children:[(0,k.jsx)(w.f4,{theme:h,code:N,language:null!=b?b:"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:r}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.A)(t,v.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,c.A)(v.codeBlockLines,L&&v.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,k.jsx)(E,{line:e,getLineProps:o,getTokenProps:r,classNames:y[t],showLineNumbers:L},t)))})})}}),(0,k.jsxs)("div",{className:v.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,k.jsx)(M,{className:v.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,k.jsx)(I,{className:v.codeButton,code:N})]})]})]})}function O(e){let{children:t,...n}=e;const c=(0,o.A)(),r=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof r?R:j;return(0,k.jsx)(a,{...n,children:r},String(c))}},48408:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var s=n(32727),o=n(2520);function c(){const{prism:e}=(0,o.p)(),{colorMode:t}=(0,s.G)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},11431:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);