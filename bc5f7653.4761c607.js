(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),s=(t(0),t(127)),o=["components"],c={title:"Core concepts"},i={unversionedId:"getting_started/core-concepts",id:"getting_started/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"This section covers the core concepts found in Synth.",source:"@site/docs/getting_started/core-concepts.md",slug:"/getting_started/core-concepts",permalink:"/synth/getting_started/core-concepts",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/core-concepts.md",version:"current",sidebar:"docsSidebar",previous:{title:"Hello world",permalink:"/synth/getting_started/hello-world"},next:{title:"Schema",permalink:"/synth/getting_started/schema"}},l=[{value:"Workspaces",id:"workspaces",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Collections",id:"collections",children:[]},{value:"Field references",id:"field-references",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Importing datasets",id:"importing-datasets",children:[]},{value:"Generating data",id:"generating-data",children:[]}],p={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This section covers the core concepts found in Synth."),Object(s.b)("h2",{id:"workspaces"},"Workspaces"),Object(s.b)("p",null,"Workspaces are marked by the existence of a ",Object(s.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory. A workspace\nrepresents a set of synthetic data namespaces managed by Synth."),Object(s.b)("p",null,"A workspace can have ",Object(s.b)("em",{parentName:"p"},"zero or more namespaces"),". Each namespace is represented as\na subdirectory of the workspace. All information pertaining to a workspace is in\nits directory, there is no external configuration."),Object(s.b)("p",null,"Below is an example directory structure for a workspace with a single\nnamespace, ",Object(s.b)("inlineCode",{parentName:"p"},"my_namepace"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2514\u2500\u2500 my_namespace\n    \u251c\u2500\u2500 my_collection_1.json\n    \u2514\u2500\u2500 my_collection_2.json\n")),Object(s.b)("h2",{id:"namespaces"},"Namespaces"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"namespace")," is the top-level abstraction in Synth. Namespaces are the\nequivalent of traditional ",Object(s.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html"},"schemas")," in the world of relational\ndatabases likes PostgreSQL. ",Object(s.b)("a",{parentName:"p",href:"#field-references"},"References")," can exist between\nfields in a given namespace, but never across namespaces."),Object(s.b)("p",null,"Namespaces are represented as sub-directories in a workspace. For example, a\nworkspace with single namespace ",Object(s.b)("inlineCode",{parentName:"p"},"some_namespace")," would have the following\nstructure:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2514\u2500\u2500 my_namespace\n")),Object(s.b)("p",null,"You can have as many namespaces as you like within a workspace:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u251c\u2500\u2500 some_namespace\n\u2514\u2500\u2500 some_other_namespace \n")),Object(s.b)("h2",{id:"collections"},"Collections"),Object(s.b)("p",null,"Every namespace has zero or more ",Object(s.b)("strong",{parentName:"p"},"collections"),". Collections are addressable by\ntheir name and correspond to ",Object(s.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/sql-createtable.html"},"tables")," in the world of relational\ndatabases. Strictly speaking, collections are a super-set of tables as they are\nin fact arbitrarily deep JSON document trees."),Object(s.b)("p",null,"Collections are represented in a workspace as JSON files. The ",Object(s.b)("em",{parentName:"p"},"name")," of a\ncollection (the way it is referred to by ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(s.b)("inlineCode",{parentName:"a"},"synth")),") is its filename\nwithout the extension. For example the file ",Object(s.b)("inlineCode",{parentName:"p"},"bank/transactions.json")," defines a\ncollection named ",Object(s.b)("inlineCode",{parentName:"p"},"transactions")," in a namespace ",Object(s.b)("inlineCode",{parentName:"p"},"bank"),"."),Object(s.b)("p",null,"For a more comprehensive example, let's imagine our namespace ",Object(s.b)("inlineCode",{parentName:"p"},"bank")," has a\ncollection ",Object(s.b)("inlineCode",{parentName:"p"},"transactions")," and another collection ",Object(s.b)("inlineCode",{parentName:"p"},"users"),". The workspace\nstructure then looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2514\u2500\u2500 bank\n    \u251c\u2500\u2500 transactions.json\n    \u2514\u2500\u2500 users.json \n")),Object(s.b)("p",null,"Collections inside a given namespace need to have unique names. You can however\nhave the same collection name in different namespaces. For\nexample ",Object(s.b)("inlineCode",{parentName:"p"},"bank/transactions.json")," and ",Object(s.b)("inlineCode",{parentName:"p"},"forex/transactions.json")," is a valid\nworkspace."),Object(s.b)("p",null,"Collections must be valid instances of the ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},Object(s.b)("inlineCode",{parentName:"a"},"synth")," schema")," that\ndescribe an array. This means at the top-level all collections must\nbe ",Object(s.b)("a",{parentName:"p",href:"/content/array"},"array generators"),"."),Object(s.b)("h2",{id:"field-references"},"Field references"),Object(s.b)("p",null,"A field reference is a special kind of fields that is useful for declaring\nrelations between different parts of a collection or different collections in\nthe same namespace."),Object(s.b)("p",null,"A field reference can be specified by using the ",Object(s.b)("a",{parentName:"p",href:"/content/same-as"},"same_as")," generator\ntype."),Object(s.b)("p",null,"The value of the ",Object(s.b)("inlineCode",{parentName:"p"},'"ref"')," field should be the address of the field you want to\nrefer to. A field address takes the\nform ",Object(s.b)("inlineCode",{parentName:"p"},"<collection name>.<level_0>.<level_1>..."),". For example, say we have a\ncollection ",Object(s.b)("inlineCode",{parentName:"p"},"users.json")," containing the following schema:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 1,\n      "high": 4,\n      "step": 1\n    }\n  },\n  "content": {\n    "type": "object",\n    "username": {\n      "type": "string",\n      "faker": {\n        "generator": "username"\n      }\n    },\n    "credit_card": {\n      "type": "string",\n      "faker": {\n        "generator": "credit_card"\n      }\n    },\n    "id": {\n      "type": "number",\n      "subtype": "u64",\n      "id": {}\n    }\n  }\n}\n')),Object(s.b)("p",null,"A reference to the ",Object(s.b)("inlineCode",{parentName:"p"},"username")," field would have the\naddress ",Object(s.b)("inlineCode",{parentName:"p"},"users.content.username"),". If we want to add a reference to this field\nfrom another collection we would simply add:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "content": {\n    ...\n    "username": {\n      "type": "same_as",\n      "ref": "users.content.username"\n    },\n    ...\n  }\n}\n')),Object(s.b)("h2",{id:"schema"},"Schema"),Object(s.b)("p",null,"The schema is the core data structure that you need to understand to be\nproductive with Synth. The schema represents your data model, it tells Synth\nexactly how to generate data, which fields we need, what types and so on. This\nis a little involved so there is a section devoted to just the ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"schema"),"."),Object(s.b)("h2",{id:"importing-datasets"},"Importing datasets"),Object(s.b)("p",null,"Synth can ingest and build schemas on the fly with\nthe ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/command-line#command-import"},Object(s.b)("inlineCode",{parentName:"a"},"synth import"))," command."),Object(s.b)("h2",{id:"generating-data"},"Generating data"),Object(s.b)("p",null,"To generate data from an existing namespace use\nthe ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/command-line#command-generate"},Object(s.b)("inlineCode",{parentName:"a"},"synth generate"))," command."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(s.b)("inlineCode",{parentName:"a"},"synth"))," uses a seedable pseudo-random source of entropy. By default,\nthe seed is set to a constant value of ",Object(s.b)("inlineCode",{parentName:"p"},"0")," using the\nRust-native ",Object(s.b)("a",{parentName:"p",href:"https://docs.rs/rand/0.8.4/rand/trait.SeedableRng.html#method.seed_from_u64"},Object(s.b)("inlineCode",{parentName:"a"},"rand::SeedableRng::seed_from_u64"))," function. This\nmeans that, by default, the data that ",Object(s.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(s.b)("inlineCode",{parentName:"a"},"synth"))," generates is\ndeterministic: it is only a function of your schema files."),Object(s.b)("p",null,"This behavior can be tuned (and the seed be changed, or randomized) using\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"--seed")," or ",Object(s.b)("inlineCode",{parentName:"p"},"--random")," flag."))}d.isMDXComponent=!0},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(o,".").concat(m)]||d[m]||b[m]||s;return t?r.a.createElement(h,c(c({ref:n},l),{},{components:t})):r.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);