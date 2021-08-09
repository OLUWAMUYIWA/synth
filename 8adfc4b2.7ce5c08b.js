(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(127)),c=["components"],i={title:"Hello world"},s={unversionedId:"getting_started/hello-world",id:"getting_started/hello-world",isDocsHomePage:!1,title:"Hello world",description:"After installing synth, the next step is to create a workspace.",source:"@site/docs/getting_started/hello-world.md",slug:"/getting_started/hello-world",permalink:"/synth/getting_started/hello-world",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/hello-world.md",version:"current",sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/synth/getting_started/installation"},next:{title:"Core concepts",permalink:"/synth/getting_started/core-concepts"}},l=[{value:"Where to go from here",id:"where-to-go-from-here",children:[]}],p={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After installing ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth")),", the next step is to create a ",Object(o.b)("strong",{parentName:"p"},"workspace"),". "),Object(o.b)("p",null,"Workspaces are directories in your filesystem that ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," uses to read your schemas from. Currently ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," reads schemas written in a specialized JSON data model. You can find out everything there is to know about ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," schemas in the ",Object(o.b)("a",{parentName:"p",href:"/synth/content/object"},"Generators")," section or in the ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"Schema"),' section. In this section we will show you how to set up a simple "hello world" data generator.'),Object(o.b)("p",null,"To create and initialise a workspace called ",Object(o.b)("inlineCode",{parentName:"p"},"synth_workspace")," in your current working directory, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir synth_workspace && cd synth_workspace && synth init\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The command ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line#command-init"},Object(o.b)("inlineCode",{parentName:"a"},"synth init"))," creates a marker directory called ",Object(o.b)("inlineCode",{parentName:"p"},".synth")," in the directory where it is run. This marker directory acts as simply an anchor to tell ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," that this is a workspace."))),Object(o.b)("p",null,"Next we need to create a ",Object(o.b)("strong",{parentName:"p"},"namespace"),". Namespaces are directories in an\ninitialized ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," workspace. All the schema files in a given\nnamespace are collated and compiled together at runtime."),Object(o.b)("p",null,"Let's create a namespace called ",Object(o.b)("inlineCode",{parentName:"p"},"my_namespace"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir my_namespace\n")),Object(o.b)("p",null,"Finally, we need to add a ",Object(o.b)("strong",{parentName:"p"},"collection"),' to our namespace. Collections describe\nthe "shape" of the data we want to generate. They are individual JSON files\nwithin a namespace written according to the ',Object(o.b)("a",{parentName:"p",href:"/synth/content/object"},Object(o.b)("inlineCode",{parentName:"a"},"synth")," schema"),"."),Object(o.b)("p",null,'To create a collection called "dummy" in our namespace, simply copy/paste the content of the following example in a file\nat ',Object(o.b)("inlineCode",{parentName:"p"},"synth_workspace/my_namespace/dummy.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "constant": 1\n    },\n   "content": {\n        "type": "string",\n        "pattern": "Hello world!"\n    }\n}\n')),Object(o.b)("p",null,"The previous example snippet is an example of\na ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},Object(o.b)("inlineCode",{parentName:"a"},"synth")," schema"),'. All such examples in these pages\nare tagged with a "',Object(o.b)("strong",{parentName:"p"},"Run"),'"\nbutton that lets you preview how ',Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," would output the corresponding\ndata."),Object(o.b)("p",null,"Finally, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"synth generate my_namespace/\n")),Object(o.b)("p",null,"and you should see an output very close to the output of the snippet."),Object(o.b)("h2",{id:"where-to-go-from-here"},"Where to go from here"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take a look at the exhaustive ",Object(o.b)("a",{parentName:"li",href:"/synth/content/object"},"generators reference"),"."),Object(o.b)("li",{parentName:"ul"},"Go deeper into how ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," works by looking at the ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/core-concepts"},"core concepts")," and the specifications of the ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/schema"},"schema"),"."),Object(o.b)("li",{parentName:"ul"},"For more complex real life examples, see the ",Object(o.b)("a",{parentName:"li",href:"/synth/examples/bank"},"examples")," section.")))}m.isMDXComponent=!0}}]);