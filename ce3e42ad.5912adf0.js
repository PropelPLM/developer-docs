(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,b=d["".concat(a,".").concat(m)]||d[m]||s[m]||c;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"Highlight",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=(r(0),r(100));const c={id:"mdx",title:"Powered by MDX"},a={unversionedId:"mdx",id:"mdx",isDocsHomePage:!1,title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/mdx.md",permalink:"/docs/mdx",editUrl:"https://github.com/PropelPLM/developer-docs/edit/master/website/docs/mdx.md"},i=[],p=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u=(l="Welcome",function(e){return console.warn("Component '"+l+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)});var l;const d={rightToc:i,Highlight:p};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(o.b)(u,{name:"Venus",mdxType:"Welcome"}),Object(o.b)(u,{name:"Mars",mdxType:"Welcome"}),Object(o.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(o.b)(p,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(o.b)("p",null,"I can write ",Object(o.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(o.b)("em",{parentName:"p"},"JSX"),"!"))}s.isMDXComponent=!0}}]);