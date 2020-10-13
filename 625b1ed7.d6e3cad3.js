(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?r.a.createElement(h,i(i({ref:n},l),{},{components:t})):r.a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var o=t(2),r=(t(0),t(100));const a={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},c={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"All requests made to Propel or Salesforce endpoints require a valid Access Token. There are various mechanisms to retrieve an access token that are listed in Salesforce documentation. We highly recommend using OAuth 2.0 for security reasons. See the Salesforce Documentation here.",source:"@site/docs/authentication.md",permalink:"/docs/authentication",editUrl:"https://github.com/PropelPLM/developer-docs/edit/master/website/docs/authentication.md",sidebar_label:"Authentication",sidebar:"someSidebar",previous:{title:"When to use Salesforce vs Propel APIs",permalink:"/docs/salesforce-vs-propel"},next:{title:"Core Objects",permalink:"/docs/object-model-core-objects"}},i=[{value:"Server-side Flow (OAuth 2.0) Example",id:"server-side-flow-oauth-20-example",children:[{value:"1. Create a Salesforce Connected App",id:"1-create-a-salesforce-connected-app",children:[]},{value:"2. Use your credentials to obtain an Access Token",id:"2-use-your-credentials-to-obtain-an-access-token",children:[]},{value:"3. Make a request to Propel Endpoints",id:"3-make-a-request-to-propel-endpoints",children:[]}]}],s={rightToc:i};function l({components:e,...n}){return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All requests made to Propel or Salesforce endpoints require a valid ",Object(r.b)("inlineCode",{parentName:"p"},"Access Token"),". There are various mechanisms to retrieve an access token that are listed in Salesforce documentation. We highly recommend using OAuth 2.0 for security reasons. See the Salesforce Documentation ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm"}),"here"),"."),Object(r.b)("h2",{id:"server-side-flow-oauth-20-example"},"Server-side Flow (OAuth 2.0) Example"),Object(r.b)("p",null,"Use the server-side flow when you can securely store your application's secret key. This example is a simple ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://expressjs.com/"}),"Express")," application using the Node.js library ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://jsforce.github.io"}),"JSForce")," to handle authentication. "),Object(r.b)("p",null,"You can see the source code for this example ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/propelplm/examples"}),"here"),"."),Object(r.b)("h3",{id:"1-create-a-salesforce-connected-app"},"1. Create a Salesforce Connected App"),Object(r.b)("p",null,"First, you'll need to open a connection with Salesforce in order to make API calls. You will get a client and secret key after creating a connected app."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In Salesforce Lightning, Go to Salesforce Setup > App Manager"),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"New Connected App")," on the App Manager page"),Object(r.b)("li",{parentName:"ol"},"Name: ",Object(r.b)("inlineCode",{parentName:"li"},"My Propel Sample App"),", API Name: ",Object(r.b)("inlineCode",{parentName:"li"},"Propel_Sample_App"),", Contact Email: ",Object(r.b)("inlineCode",{parentName:"li"},"your_email")),Object(r.b)("li",{parentName:"ol"},"Enable OAuth Settings"),Object(r.b)("li",{parentName:"ol"},"Callback URL: ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:4000/oauth2/callback")),Object(r.b)("li",{parentName:"ol"},"Selected OAuth Scopes: ",Object(r.b)("inlineCode",{parentName:"li"},"(full), (api), (web), (refresh_token, offline_access)")," It is recommended to have at least these four scopes selected."),Object(r.b)("li",{parentName:"ol"},"Save")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Make sure to save your client and secret key for connecting your application.")),Object(r.b)("h3",{id:"2-use-your-credentials-to-obtain-an-access-token"},"2. Use your credentials to obtain an Access Token"),Object(r.b)("p",null,"First, configure your application to leverage the JSforce OAuth mechanism by entering your ",Object(r.b)("inlineCode",{parentName:"p"},"clientId"),", ",Object(r.b)("inlineCode",{parentName:"p"},"clientSecret"),", ",Object(r.b)("inlineCode",{parentName:"p"},"redirectUri"),". Also, enter the scope of authentication for the application. Make sure that your ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," matches the defined scope in your Connected App."),Object(r.b)("h4",{id:"get-an-authorization-code"},"Get an Authorization Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),"var jsforce = require('jsforce');\n//\n// OAuth2 client information can be shared with multiple connections.\n//\nvar oauth2 = new jsforce.OAuth2({\n  // you can change loginUrl to connect to sandbox or prerelease env.\n  // loginUrl : 'https://test.salesforce.com',\n  clientId : '<your Salesforce OAuth2 client ID is here>',\n  clientSecret : '<your Salesforce OAuth2 client secret is here>',\n  redirectUri : '<callback URI is here>'\n});\n//\n// Get authorization url and redirect to it.\n//\napp.get('/oauth2/auth', function(req, res) {\n  res.redirect(oauth2.getAuthorizationUrl({ scope : 'api full web refresh_token offline_access' }));\n});\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If OAuth 2.0 is not needed for your app, use the SOAP login API instead of the OAuth flow. Only your username and password are required to authenticate. You may need to combine your ",Object(r.b)("inlineCode",{parentName:"p"},"password+security token"),"."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"conn.login(username, password, function(err, userInfo) { console.log(userInfo) });\n")))),Object(r.b)("h4",{id:"exchange-authorization-code-for-an-access-token"},"Exchange Authorization Code for an Access Token"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),"//\n// Pass received authorization code and get access token\n//\napp.get('/oauth2/callback', function(req, res) {\n  var conn = new jsforce.Connection({ oauth2 : oauth2 });\n  var code = req.param('code');\n  conn.authorize(code, function(err, userInfo) {\n    if (err) { return console.error(err); }\n    // Now you can get the access token, refresh token, and instance URL information.\n    // Save them to establish connection next time.\n    console.log(conn.accessToken);\n    console.log(conn.refreshToken);\n    console.log(conn.instanceUrl);\n    console.log(\"User ID: \" + userInfo.id);\n    console.log(\"Org ID: \" + userInfo.organizationId);\n    // ...\n    res.send('success'); // or your desired response\n  });\n});\n")),Object(r.b)("p",null,"You've now successfully received all the information you need to begin making calls to the Propel API."),Object(r.b)("h3",{id:"3-make-a-request-to-propel-endpoints"},"3. Make a request to Propel Endpoints"),Object(r.b)("p",null,"Using your successful authentication, make a request to the ",Object(r.b)("inlineCode",{parentName:"p"},"GET /v2/item")," endpoint (see highlighted lines). This sample code shows how to make the request using JSForce and the Axios library."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js" {17-25,27-38}',title:'"index.js"',"{17-25,27-38}":!0}),"//\n// Pass received authorization code and get access token\n//\napp.get('/oauth2/callback', function(req, res) {\n  var conn = new jsforce.Connection({ oauth2 : oauth2 });\n  var code = req.param('code');\n  conn.authorize(code, function(err, userInfo) {\n    if (err) { return console.error(err); }\n    // Now you can get the access token, refresh token, and instance URL information.\n    // Save them to establish connection next time.\n    console.log(conn.accessToken);\n    console.log(conn.refreshToken);\n    console.log(conn.instanceUrl);\n    console.log(\"User ID: \" + userInfo.id);\n    console.log(\"Org ID: \" + userInfo.organizationId);\n    \n    // USING JSFORCE: After authenticating successfully, make a GET request to /v2/item/:itemNumber\n    var itemNumber = 'item_number_here';\n    conn.apex.get('/services/apexrest/PDLM/api/v2/item/'+itemNumber+'')\n    .then( (resultRows) => {\n      console.log(resultRows);\n    })\n    .catch((e)=>{ \n      console.log(e);\n    }); \n\n    // USING AXIOS. You must explicitly pass the Access Token in the Authorization Header\n    axios.get(conn.instanceUrl + '/services/apexrest/PDLM/api/v2/item/'+itemNumber+'', {\n      headers: {'Authorization': 'Bearer ' + conn.accessToken }\n    })\n    .then(function (response) {\n      // handle success\n      console.log(response);\n    })\n    .catch(function (error) {\n      // handle error\n      console.log(error);\n    })\n\n\n    res.send('Everything is good.')\n\n  });\n});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"When sending requests, you must include an ",Object(r.b)("inlineCode",{parentName:"strong"},"Authorization")," header with the following information ",Object(r.b)("inlineCode",{parentName:"strong"},"Bearer <Access Token>"))))}l.isMDXComponent=!0}}]);