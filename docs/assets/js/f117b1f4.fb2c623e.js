"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[50145],{68404:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var d=s(31085),n=s(71184);const i={id:"listbox-option",title:"fast-option",sidebar_label:"option",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-listbox-option.mdx",description:"fast-option is a web component implementation of an option.",keywords:["fast-listbox-option"]},l=void 0,r={id:"components/listbox-option",title:"fast-option",description:"fast-option is a web component implementation of an option.",source:"@site/versioned_docs/version-1.x/components/fast-listbox-option.mdx",sourceDirName:"components",slug:"/components/listbox-option",permalink:"/docs/1.x/components/listbox-option",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-listbox-option.mdx",tags:[],version:"1.x",frontMatter:{id:"listbox-option",title:"fast-option",sidebar_label:"option",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/components/fast-listbox-option.mdx",description:"fast-option is a web component implementation of an option.",keywords:["fast-listbox-option"]},sidebar:"docs",previous:{title:"listbox",permalink:"/docs/1.x/components/listbox"},next:{title:"menu",permalink:"/docs/1.x/components/menu"}},c={},o=[{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create your own design",id:"create-your-own-design",level:2},{value:"API",id:"api",level:2},{value:"class: <code>ListboxOption</code>",id:"class-listboxoption",level:3},{value:"Superclass",id:"superclass",level:4},{value:"Fields",id:"fields",level:4},{value:"Methods",id:"methods",level:4},{value:"Attributes",id:"attributes",level:4},{value:"CSS Parts",id:"css-parts",level:4},{value:"Slots",id:"slots",level:4},{value:"class: <code>DelegatesARIAListboxOption</code>",id:"class-delegatesarialistboxoption",level:3},{value:"Fields",id:"fields-1",level:4},{value:"Functions",id:"functions",level:3},{value:"Additional resources",id:"additional-resources",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:["An implementation of an ",(0,d.jsx)(t.a,{href:"https://w3c.github.io/aria/#option",children:"option"}),". To avoid namespace collisions with the ",(0,d.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option",children:"Option() constructor"}),", the component class is ",(0,d.jsx)(t.code,{children:"ListboxOption"}),", and our implementation is named ",(0,d.jsx)(t.code,{children:"fast-option"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"<fast-option>"})," component will only provide internals related to form association when used within a form-associated component such as ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/select",children:(0,d.jsx)(t.code,{children:"fast-select"})})," or ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/combobox",children:(0,d.jsx)(t.code,{children:"fast-combobox"})}),". It will not provide these capabilities when used only with a ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/listbox",children:(0,d.jsx)(t.code,{children:"fast-listbox"})}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-ts",children:'import {\n    provideFASTDesignSystem,\n    fastOption\n} from "@microsoft/fast-components";\n\nprovideFASTDesignSystem()\n    .register(\n        fastOption()\n    );\n'})}),"\n",(0,d.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsxs)(t.p,{children:["See ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/select",children:(0,d.jsx)(t.code,{children:"fast-select"})}),", ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/combobox",children:(0,d.jsx)(t.code,{children:"fast-combobox"})}),", or ",(0,d.jsx)(t.a,{href:"/docs/1.x/components/listbox",children:(0,d.jsx)(t.code,{children:"fast-listbox"})}),"."]}),"\n",(0,d.jsx)(t.h2,{id:"create-your-own-design",children:"Create your own design"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-ts",children:'import {\n    ListboxOption,\n    listboxOptionTemplate as template,\n} from "@microsoft/fast-foundation";\nimport { optionStyles as styles } from "./my-listbox-option.styles";\n\nexport const myOption = ListboxOption.compose({\n    baseName: "option",\n    template,\n    styles,\n});\n'})}),"\n",(0,d.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,d.jsxs)(t.h3,{id:"class-listboxoption",children:["class: ",(0,d.jsx)(t.code,{children:"ListboxOption"})]}),"\n",(0,d.jsx)(t.h4,{id:"superclass",children:"Superclass"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Module"}),(0,d.jsx)(t.th,{children:"Package"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"FoundationElement"})}),(0,d.jsx)(t.td,{children:"/src/foundation-element/foundation-element.js"}),(0,d.jsx)(t.td,{})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Privacy"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Inherited From"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"checked"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean or undefined"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The checked state is used when the parent listbox is in multiple selection mode. To avoid accessibility conflicts, the checked state should not be present in single selection mode."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"content"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Node[]"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The default slotted content."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"defaultSelected"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"The defaultSelected state of the option."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"disabled"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The disabled state of the option."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"selectedAttribute"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The selected attribute value. This sets the initial selected value."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"selected"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The checked state of the control."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"dirtyValue"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Track whether the value has been changed from the initial value"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"initialValue"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The initial value of the option. This value sets the `value` property only when the `value` property has not been explicitly set."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"label"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"text"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"value"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"form"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"HTMLFormElement or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"proxy"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"new Option(             `${this.textContent}`,             this.initialValue,             this.defaultSelected,             this.selected         )"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"$presentation"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ComponentPresentation or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"A property which resolves the ComponentPresentation instance for the current component."}),(0,d.jsx)(t.td,{children:"FoundationElement"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"template"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ElementViewTemplate or void or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition."}),(0,d.jsx)(t.td,{children:"FoundationElement"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"styles"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ElementStyles or void or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition."}),(0,d.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"methods",children:"Methods"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Privacy"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Parameters"}),(0,d.jsx)(t.th,{children:"Return"}),(0,d.jsx)(t.th,{children:"Inherited From"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"checkedChanged"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:"Updates the ariaChecked property when the checked property changes."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"prev: boolean or unknown, next: boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"defaultSelectedChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"disabledChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"prev: boolean, next: boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"selectedAttributeChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"selectedChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"initialValueChanged"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"previous: string, next: string"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"templateChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{children:"FoundationElement"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"stylesChanged"})}),(0,d.jsx)(t.td,{children:"protected"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"void"})}),(0,d.jsx)(t.td,{children:"FoundationElement"})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"attributes",children:"Attributes"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Field"}),(0,d.jsx)(t.th,{children:"Inherited From"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"disabled"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"selected"})}),(0,d.jsx)(t.td,{children:"selectedAttribute"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"value"})}),(0,d.jsx)(t.td,{children:"initialValue"}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"css-parts",children:"CSS Parts"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"content"})}),(0,d.jsx)(t.td,{children:"Wraps the listbox option content"})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"start"})}),(0,d.jsx)(t.td,{children:"Content which can be provided before the listbox option content"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"end"})}),(0,d.jsx)(t.td,{children:"Content which can be provided after the listbox option content"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The default slot for listbox option content"})]})]})]}),"\n",(0,d.jsx)("hr",{}),"\n",(0,d.jsxs)(t.h3,{id:"class-delegatesarialistboxoption",children:["class: ",(0,d.jsx)(t.code,{children:"DelegatesARIAListboxOption"})]}),"\n",(0,d.jsx)(t.h4,{id:"fields-1",children:"Fields"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Privacy"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Inherited From"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ariaChecked"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"true" or "false" or string or null'})}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#option",children:"https://www.w3.org/TR/wai-aria-1.2/#option"})," for more information."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ariaPosInSet"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#option",children:"https://www.w3.org/TR/wai-aria-1.2/#option"})," for more information."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ariaSelected"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:'"true" or "false" or string or null'})}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#option",children:"https://www.w3.org/TR/wai-aria-1.2/#option"})," for more information."]}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ariaSetSize"})}),(0,d.jsx)(t.td,{children:"public"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string or null"})}),(0,d.jsx)(t.td,{}),(0,d.jsxs)(t.td,{children:["See ",(0,d.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#option",children:"https://www.w3.org/TR/wai-aria-1.2/#option"})," for more information."]}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)("hr",{}),"\n",(0,d.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Parameters"}),(0,d.jsx)(t.th,{children:"Return"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"isListboxOption"})}),(0,d.jsxs)(t.td,{children:["Determines if the element is a (ListboxOption",":class",")"]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"el: Element, element"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"el is ListboxOption"})})]})})]}),"\n",(0,d.jsx)("hr",{}),"\n",(0,d.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/listbox-option/listbox-option.spec.md",children:"Component technical specification"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://w3c.github.io/aria/#option",children:"W3C Component Aria Practices"})}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var d=s(14041);const n={},i=d.createContext(n);function l(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);