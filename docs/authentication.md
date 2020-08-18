---
id: authentication
title: Authentication
sidebar_label: Authentication
---

All requests made to Propel or Salesforce endpoints require a valid `Access Token`. There are various mechanisms to retrieve an access token that are listed in Salesforce documentation. We highly recommend using OAuth 2.0 for security reasons. See the Salesforce Documentation [here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_oauth_and_connected_apps.htm).

## Server-side Flow (OAuth 2.0) Example
Use the server-side flow when you can securely store your application's secret key. This example is a simple [Express](https://expressjs.com/) application using the Node.js library [JSForce](https://jsforce.github.io) to handle authentication. 

You can see the source code for this example [here](https://github.com/propelplm/examples).

### 1. Create a Salesforce Connected App
First, you'll need to open a connection with Salesforce in order to make API calls. You will get a client and secret key after creating a connected app.
1. In Salesforce Lightning, Go to Salesforce Setup > App Manager
2. Click `New Connected App` on the App Manager page
3. Name: `My Propel Sample App`, API Name: `Propel_Sample_App`, Contact Email: `your_email`
4. Enable OAuth Settings
5. Callback URL: `http://localhost:4000/oauth2/callback`
6. Selected OAuth Scopes: `(full), (api), (web), (refresh_token, offline_access)` It is recommended to have at least these four scopes selected.
7. Save

**Make sure to save your client and secret key for connecting your application.**

### 2. Use your credentials to obtain an Access Token
First, configure your application to leverage the JSforce OAuth mechanism by entering your `clientId`, `clientSecret`, `redirectUri`. Also, enter the scope of authentication for the application. Make sure that your `scope` matches the defined scope in your Connected App.

#### Get an Authorization Code
```javascript title="index.js"
var jsforce = require('jsforce');
//
// OAuth2 client information can be shared with multiple connections.
//
var oauth2 = new jsforce.OAuth2({
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com',
  clientId : '<your Salesforce OAuth2 client ID is here>',
  clientSecret : '<your Salesforce OAuth2 client secret is here>',
  redirectUri : '<callback URI is here>'
});
//
// Get authorization url and redirect to it.
//
app.get('/oauth2/auth', function(req, res) {
  res.redirect(oauth2.getAuthorizationUrl({ scope : 'api full web refresh_token offline_access' }));
});
```

:::tip
If OAuth 2.0 is not needed for your app, use the SOAP login API instead of the OAuth flow. Only your username and password are required to authenticate. You may need to combine your `password+security token`.
```
conn.login(username, password, function(err, userInfo) { console.log(userInfo) });
```
:::

#### Exchange Authorization Code for an Access Token
```javascript title="index.js"
//
// Pass received authorization code and get access token
//
app.get('/oauth2/callback', function(req, res) {
  var conn = new jsforce.Connection({ oauth2 : oauth2 });
  var code = req.param('code');
  conn.authorize(code, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token, refresh token, and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.refreshToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
    res.send('success'); // or your desired response
  });
});
```

You've now successfully received all the information you need to begin making calls to the Propel API.

### 3. Make a request to Propel Endpoints
Using your successful authentication, make a request to the `GET /v2/item` endpoint (see highlighted lines). This sample code shows how to make the request using JSForce and the Axios library.

```javascript title="index.js" {17-25,27-38}
//
// Pass received authorization code and get access token
//
app.get('/oauth2/callback', function(req, res) {
  var conn = new jsforce.Connection({ oauth2 : oauth2 });
  var code = req.param('code');
  conn.authorize(code, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token, refresh token, and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.refreshToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    
    // USING JSFORCE: After authenticating successfully, make a GET request to /v2/item/:itemNumber
    var itemNumber = 'item_number_here';
    conn.apex.get('/services/apexrest/PDLM/api/v2/item/'+itemNumber+'')
    .then( (resultRows) => {
      console.log(resultRows);
    })
    .catch((e)=>{ 
      console.log(e);
    }); 

    // USING AXIOS. You must explicitly pass the Access Token in the Authorization Header
    axios.get(conn.instanceUrl + '/services/apexrest/PDLM/api/v2/item/'+itemNumber+'', {
      headers: {'Authorization': 'Bearer ' + conn.accessToken }
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })


    res.send('Everything is good.')

  });
});
```

**When sending requests, you must include an `Authorization` header with the following information `Bearer <Access Token>`**
