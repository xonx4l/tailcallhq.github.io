"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Quick Start",slug:"/"},o=void 0,l={unversionedId:"intro/quickstart",id:"intro/quickstart",title:"Quick Start",description:"Requirements",source:"@site/docs/intro/quickstart.md",sourceDirName:"intro",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Quick Start",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Operators",permalink:"/docs/operators"}},s={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"Compose REST apis into a GraphQL schema",id:"compose-rest-apis-into-a-graphql-schema",level:3},{value:"Create the schema definition",id:"create-the-schema-definition",level:4},{value:"Register the schema definition with the server",id:"register-the-schema-definition-with-the-server",level:4},{value:"Query the registered schema",id:"query-the-registered-schema",level:4}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To run Tailcall, you need to have Java 11 or above installed on your machine."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("h4",{id:"homebrew"},"Homebrew"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you don't already have Homebrew installed, you can find the instructions ",(0,a.kt)("a",{parentName:"li",href:"https://brew.sh/"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Add the Tailcall repository to Homebrew by running the following command in your terminal:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap tailcallhq/tailcall\nbrew install tailcall\n"))),(0,a.kt)("li",{parentName:"ol"},"Verify that Tailcall is installed correctly by running:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tc --version\n"))),(0,a.kt)("li",{parentName:"ol"},"To start the Tailcall server, execute the following command:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tc-server\n")),"This will initiate the server at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/graphql"),".")),(0,a.kt)("h3",{id:"compose-rest-apis-into-a-graphql-schema"},"Compose REST apis into a GraphQL schema"),(0,a.kt)("p",null,"For our first example, we are going to compose a graphQL schema from the REST apis at ",(0,a.kt)("a",{href:"https://jsonplaceholder.typicode.com/",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/")),", a free online REST api with some fake data.\nWe will use the api at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com/users")," to get a list of users, and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com/users/:id/posts")," to get the posts for each user, and compose them into a single GraphQL schema."),(0,a.kt)("h4",{id:"create-the-schema-definition"},"Create the schema definition"),(0,a.kt)("p",null,"Create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonplaceholder.graphql")," and paste the following contents into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'# Specify a base url for all http requests\nschema @server(baseURL: "http://jsonplaceholder.typicode.com") {\n  query: Query\n}\n\ntype Query {\n  # Specify the http path for the users query\n  users: [User] @http(path: "/users")\n}\n\n# Create a user type with the fields returned by the users api\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  email: String!\n\n  # Extend the user type with the posts field\n  # Use the current user\'s id to construct the path\n  posts: [Post] @http(path: "/users/{{value.id}}/posts")\n}\n\n# Create a post type with the fields returned by the posts api\ntype Post {\n  id: Int!\n  title: String!\n  body: String!\n}\n')),(0,a.kt)("p",null,"The above file is a standard ",(0,a.kt)("inlineCode",{parentName:"p"},".graphQL")," file, with a few additions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@http")," directives. So basically we specify the graphQL schema and how to resolve that graphQL schema in the same file, without having to write any code! Here is a quick overview of what the above schema does:"),(0,a.kt)("h4",{id:"register-the-schema-definition-with-the-server"},"Register the schema definition with the server"),(0,a.kt)("p",null,"Now, again in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," directory, run the following command to register this schema with the server. Specify the full path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonplaceholder.graphql")," file that you created above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tc publish jsonplaceholder.graphql\n")),(0,a.kt)("p",null,"If the command succeeds, you should see output like the following below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Deployment was completed successfully.\nDigest:     4ee03fde640e2f4c3e65c570971cc8b9ef6964926a79eed884eca6f864a43165\nEndpoints:  2\nUnsafe:     0\nPlayground: http://cloud.tailcall.run/graphql/4ee03fde640e2f4c3e65c570971cc8b9ef6964926a79eed884eca6f864a43165.\nN + 1:      1\n")),(0,a.kt)("p",null,"The server registers the schema and prints out a load of meta information. We will cover those in detail in a bit for now open the ",(0,a.kt)("strong",{parentName:"p"},"playground URL")," in a new tab in your browser and try it out for yourself!"),(0,a.kt)("h4",{id:"query-the-registered-schema"},"Query the registered schema"),(0,a.kt)("p",null,"Let's try the following query, to get all the users and the title of each post of each user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"query {\n  users {\n    id\n    name\n    posts {\n      title\n    }\n  }\n}\n")),(0,a.kt)("p",null,"You should see output like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "data": {\n    "users": [\n      {\n        "id": 1,\n        "name": "Leanne Graham",\n        "posts": [\n          {\n            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"\n          },\n          ...\n        ]\n      },\n      {\n        "id": 2,\n        "name": "Ervin Howell",\n        "posts": [\n          {\n            "title": "et ea vero quia laudantium autem"\n          },\n          {\n            "title": "in quibusdam tempore odit est dolorem"\n          },\n          ...\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"You can now add additional fields, and compose more queries together!"))}u.isMDXComponent=!0}}]);