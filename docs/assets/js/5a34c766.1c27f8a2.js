"use strict";(self.webpackChunkfast_site=self.webpackChunkfast_site||[]).push([[91022],{38837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(31085),s=t(71184);const a={id:"observables-and-state",title:"Observables and State",sidebar_label:"Observables and State",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/fast-element/observables-and-state.md",description:"To enable binding tracking and change notification, properties must be decorated with either @attr or @observable.",keywords:["observables and state"]},o=void 0,i={id:"fast-element/observables-and-state",title:"Observables and State",description:"To enable binding tracking and change notification, properties must be decorated with either @attr or @observable.",source:"@site/versioned_docs/version-1.x/fast-element/observables-and-state.md",sourceDirName:"fast-element",slug:"/fast-element/observables-and-state",permalink:"/docs/1.x/fast-element/observables-and-state",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/fast-element/observables-and-state.md",tags:[],version:"1.x",frontMatter:{id:"observables-and-state",title:"Observables and State",sidebar_label:"Observables and State",custom_edit_url:"https://github.com/microsoft/fast/edit/master/sites/website/versioned_docs/version-legacy/fast-element/observables-and-state.md",description:"To enable binding tracking and change notification, properties must be decorated with either @attr or @observable.",keywords:["observables and state"]},sidebar:"docs",previous:{title:"Using Directives",permalink:"/docs/1.x/fast-element/using-directives"},next:{title:"Working with Shadow DOM",permalink:"/docs/1.x/fast-element/working-with-shadow-dom"}},l={},c=[{value:"Reactivity",id:"reactivity",level:2},{value:"Observables",id:"observables",level:2},{value:"Observable Features",id:"observable-features",level:2},{value:"Access tracking",id:"access-tracking",level:3},{value:"Internal observation",id:"internal-observation",level:3},{value:"External observation",id:"external-observation",level:3},{value:"Observing Arrays",id:"observing-arrays",level:2},{value:"Observing Volatile Properties",id:"observing-volatile-properties",level:2},{value:"Records",id:"records",level:3}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"reactivity",children:"Reactivity"}),"\n",(0,r.jsxs)(n.p,{children:["The arrow function bindings and directives used in templates allow the ",(0,r.jsx)(n.code,{children:"fast-element"})," templating engine to intelligently react by only updating the parts of the DOM that actually change, with no need for a virtual DOM, VDOM diffing, or DOM reconciliation algorithms. This approach enables top-tier initial render time, industry-leading incremental DOM updates, and ultra-low memory allocation."]}),"\n",(0,r.jsx)(n.p,{children:"When a binding is used within a template, the underlying engine uses a technique to capture which properties are accessed in that expression. With the list of properties captured, it then subscribes to changes in their values. Any time a value changes, a task is scheduled on the DOM update queue. When the queue is processed, all updates run as a batch, updating precisely the aspects of the DOM that have changed."}),"\n",(0,r.jsx)(n.h2,{id:"observables",children:"Observables"}),"\n",(0,r.jsxs)(n.p,{children:["To enable binding tracking and change notification, properties must be decorated with either ",(0,r.jsx)(n.code,{children:"@attr"})," or ",(0,r.jsx)(n.code,{children:"@observable"}),". Use ",(0,r.jsx)(n.code,{children:"@attr"})," for primitive properties (string, bool, number) that are intended to be surfaced on your element as HTML attributes. Use ",(0,r.jsx)(n.code,{children:"@observable"})," for all other properties. In addition to observing properties, the templating system can also observe arrays. The ",(0,r.jsx)(n.code,{children:"repeat"})," directive is able to efficiently respond to array change records, updating the DOM based on changes in the collection."]}),"\n",(0,r.jsx)(n.p,{children:"These decorators are a means of meta-programming the properties on your class, such that they include all the implementation needed to support state tracking, observation, and reactivity. You can access any property within your template, but if it hasn't been decorated with one of these two decorators, its value will not update after the initial render."}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@attr"})," decorator can only be used in a ",(0,r.jsx)(n.code,{children:"FASTElement"})," but the ",(0,r.jsx)(n.code,{children:"@observable"})," decorator can be used in any class."]})}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Properties with only a getter, that function as a computed property over other observables, should not be decorated with ",(0,r.jsx)(n.code,{children:"@attr"})," or ",(0,r.jsx)(n.code,{children:"@observable"}),". However, they may need to be decorated with ",(0,r.jsx)(n.code,{children:"@volatile"}),", depending on the internal logic."]})}),"\n",(0,r.jsx)(n.h2,{id:"observable-features",children:"Observable Features"}),"\n",(0,r.jsx)(n.h3,{id:"access-tracking",children:"Access tracking"}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"@attr"})," and ",(0,r.jsx)(n.code,{children:"@observable"})," decorated properties are accessed during template rendering, they are tracked, allowing the engine to deeply understand the relationship between your model and view. These decorators serves to meta-program the property for you, injecting code to enable the observation system. However, if you do not like this approach, for ",(0,r.jsx)(n.code,{children:"@observable"}),", you can always implement notification manually. Here's what that would look like:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Manual Observer Implementation"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Observable } from '@microsoft/fast-element';\n\nexport class Person {\n  private _firstName: string;\n  private _lastName: string;\n\n  get firstName() {\n    Observable.track(this, 'firstName');\n    return this._firstName;\n  }\n\n  set firstName(value: string) {\n    this._firstName = value;\n    Observable.notify(this, 'firstName');\n  }\n\n  get lastName() {\n    Observable.track(this, 'lastName');\n    return this._lastName;\n  }\n\n  set lastName(value: string) {\n    this._lastName = value;\n    Observable.notify(this, 'lastName');\n  }\n\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Notice that the ",(0,r.jsx)(n.code,{children:"fullName"})," property does not need any special code, since it's computing based on properties that are already observable. There is one special exception to this: if you have a computed property with branching code paths, such as ternary operators, if/else conditions, etc, then you must tell the observation system that your computed property has ",(0,r.jsx)(n.em,{children:"volatile"})," dependencies. In other words, which properties need to be observed may change from invocation to invocation based on which code path executes."]}),"\n",(0,r.jsx)(n.p,{children:"Here's how you would do that with a decorator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { observable, volatile } from '@microsoft/fast-element';\n\nexport class MyClass {\n  @observable someBoolean = false;\n  @observable valueA = 0;\n  @observable valueB = 42;\n\n  @volatile\n  get computedValue() {\n    return this.someBoolean ? this.valueA : this.valueB;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here's how you would do it without a decorator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Observable, observable } from '@microsoft/fast-element';\n\nexport class MyClass {\n  @observable someBoolean = false;\n  @observable valueA = 0;\n  @observable valueB = 42;\n\n  get computedValue() {\n    Observable.trackVolatile();\n    return this.someBoolean ? this.valueA : this.valueB;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"internal-observation",children:"Internal observation"}),"\n",(0,r.jsxs)(n.p,{children:["On the class where the ",(0,r.jsx)(n.code,{children:"@attr"})," or ",(0,r.jsx)(n.code,{children:"@observable"})," is defined, you can optionally implement a ",(0,r.jsx)(n.em,{children:"propertyName"}),"Changed method to easily respond to changes in your own state."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Property Change Callbacks"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { observable } from '@microsoft/fast-element';\n\nexport class Person {\n  @observable name: string;\n\n  nameChanged(oldValue: string, newValue: string) {\n\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"external-observation",children:"External observation"}),"\n",(0,r.jsxs)(n.p,{children:["Decorated properties can be subscribed to, to receive notification of changes in the property value. The templating engine uses this, but you can also directly subscribe. Here's how you would subscribe to changes in the ",(0,r.jsx)(n.code,{children:"name"})," property of a ",(0,r.jsx)(n.code,{children:"Person"})," class:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Subscribing to an Observable"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Observable } from '@microsoft/fast-element';\n\nconst person = new Person();\nconst notifier = Observable.getNotifier(person);\nconst handler = {\n  handleChange(source: any, propertyName: string) {\n    // respond to the change here\n    // source will be the person instance\n    // propertyName will be \"name\"\n  }\n};\n\nnotifier.subscribe(handler, 'firstName')\nnotifier.unsubscribe(handler, 'lastName');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"observing-arrays",children:"Observing Arrays"}),"\n",(0,r.jsx)(n.p,{children:"So far, we've only seen how to observe properties on objects, but it's also possible to observe arrays for changes. Given an instance of an array, it can be observed like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Observing an Array"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const arr = [];\nconst notifier = Observable.getNotifier(arr);\nconst handler = {\n  handleChange(source: any, splices: Splice[]) {\n    // respond to the change here\n    // source will be the array instance\n    // splices will be an array of change records\n    // describing the mutations in the array in\n    // terms of splice operations\n  }\n};\n\nnotifier.subscribe(handler);\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are a couple of important details to note with array observation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"fast-element"})," library's ability to observe arrays is opt-in, in order that the functionality remain tree-shakeable. If you use a ",(0,r.jsx)(n.code,{children:"repeat"})," directive anywhere in your code, you will be automatically opted in. However, if you wish to use the above APIs and are not using ",(0,r.jsx)(n.code,{children:"repeat"}),", you will need to enable array observation by importing and calling the ",(0,r.jsx)(n.code,{children:"enableArrayObservation()"})," function."]}),"\n",(0,r.jsxs)(n.li,{children:["The observation system cannot track changes made directly through an index update. e.g. ",(0,r.jsx)(n.code,{children:"arr[3] = 'new value';"}),". This is due to a limitation in JavaScript. To work around this, update arrays with the equivalent ",(0,r.jsx)(n.code,{children:"splice"})," code e.g. ",(0,r.jsx)(n.code,{children:"arr.splice(3, 1, 'new value');"})]}),"\n",(0,r.jsx)(n.li,{children:"If the array is a property of an object, you will often want to observe both the property and the array. Observing the property will allow you to detect when the array instance is completely replaced on the object, while observing the array will allow you to detect changes in the array instance itself. When the property changes, be sure to unsubscribe to the old array and set up a subscription to the new array instance."}),"\n",(0,r.jsx)(n.li,{children:"Observing an array only notifies on changes to the array itself. It does not notify on changes to properties on objects held within the array. Separate observers would need to be set up for those individual properties. These could be set up and torn down in response to changes in the array though."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"observing-volatile-properties",children:"Observing Volatile Properties"}),"\n",(0,r.jsx)(n.p,{children:"In addition to watching properties and arrays, you can also watch volatile properties."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Subscribing to a Volatile Property"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Observable, defaultExecutionContext } from '@microsoft/fast-element';\n\nconst myObject = new MyClass();\nconst handler = {\n  handleChange(source: any) {\n    // respond to the change here\n    // the source is the volatile binding itself\n  }\n};\nconst bindingObserver = Observable.binding(myObject.computedValue, handler);\nbindingObserver.observe(myObject, defaultExecutionContext);\n\n// Call this to dismantle the observer\nbindingObserver.disconnect();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"records",children:"Records"}),"\n",(0,r.jsxs)(n.p,{children:["To inspect which observable objects and properties were accessed from a ",(0,r.jsx)(n.code,{children:"BindingObserver"}),", you can get the observation records from ",(0,r.jsx)(n.code,{children:"BindingObserver.records()"})," after observing the binding."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example: Getting observation records"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const binding = (x: MyClass) => x.someBoolean ? x.valueA : x.valueB;\nconst bindingObserver = Observable.binding(binding);\nconst value = bindingObserver.observe({}, defaultExecutionContext);\n\nfor (const record of bindingObserver.records()) {\n  // Do something with the binding's observable dependencies\n  console.log(record.propertySource, record.propertyName)\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(14041);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);