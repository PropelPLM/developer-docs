---
id: platform-events
title: Platform Events
sidebar_label: Platform Events
---

Platform events are the preferred method for sending messages to initiate realtime transactions. 

## Available Propel Platform Events

| Platform Event Name     | When the event fires                                                                       | Object  |
|-------------------------|--------------------------------------------------------------------------------------------|---------|
| Item Change             | When a new item is created, and Is Create flag = true                                      | Item    |
| Publish Item Revision   | When an item revision is released                                                          | Item    |
| Supersede Item Revision | When an item revision has been superseded by the release of a new latest released revision | Item    |
| Change Event            | When a change is approved, the event's Is Approved flag = true                             | Change  |
| Change Event            | When a change is cancelled, the event's Is Cancelled flag = true                           | Change  |
| Change Event            | When the change's phase is updated, the event's Is Update flag = true                      | Change  |
| Quality Event           | When a quality is approved, the event's Is Approved flag = true                            | Quality |
| Quality Event           | When a quality's phase is updated, the event's Is Update flag = true                       | Quality |

## Creating Custom Platform Events
To create your own custom platform events, see the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm).

## Subscribing to a Platform Event Example
Subscribing to a Platform Event and receiving messages is a straightforward process involving very little code.

To begin, identify the Platform Event you'd like to subscribe to. In this example, we'll be subscribing to a Platform Event event that exists in the Propel Managed Package called `PDLM__ChangeEvent__e`. You can see the sample code [here](https://github.com/propelplm/examples/platform-event-sample).

### 1. Using the JSForce library, authenticate with Propel
In the sample code, remember to modify your username and password in the `config.editme.js` file and remove the `editme` string from the filename.
``` javascript title="index.js"
var conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});
conn.login(config.username, config.password, function(err, userInfo) {
  if (err) { return console.error(err); }

  console.log("Authenticated and waiting for a message...");

  // ...
});
```

### 2. Subscribe to a Platform Event
Now that you're authenticated, add a few lines of code to subscribe to the Platform Event. Make sure that you use the API Name of the event. For example the `Change Event` in the table above would translate to `PDLM__ChangeEvent__e`. You can find the API names of Platform Events in **Salesforce Setup > Integrations > Platform Events**.
``` javascript title="index.js" {10-12}
var conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});
conn.login(config.username, config.password, function(err, userInfo) {
  if (err) { return console.error(err); }

  console.log("Authenticated and waiting for a message...");

  conn.streaming.topic("/event/PDLM__ChangeEvent__e").subscribe(function(message) {
    console.dir(message);
  });

  // ...
});
```

### 3. Trigger your Platform Event
Now that your code is written, run the local server by entering `node index.js` in terminal.

After you've started the server, open your Propel org and complete the action in the interface that will trigger the Platform Event. In this example, we will release a change order in Propel to trigger the `ChangeEvent` Platform Event.

The results will display in the console with a response similar to the following:
``` javascript title="Console"
{ schema: 'TlstWsBmf0CW6PhV2bBHqQ',
  payload: 
   { 
      PDLM__Is_Approved__c: 'True',
      PDLM__Is_Cancelled__c: false,
      PDLM__Is_Descriptive__c: false,
      PDLM__Is_Update__c: false,
      PDLM__Record_Id__c: '0063a00000Ae8xEEDC',
      PDLM__Session__c: 'omitted',
      PDLM__Value__c: '',
      CreatedById: '0053j00000Ae8xDAAR',
      CreatedDate: '2020-08-14T00:32:41Z' },
  event: { replayId: 36104 } }
```

## Additional Resources
[Event-driven Architecture Trailhead](https://trailhead.salesforce.com/en/content/learn/modules/platform_events_basics/platform_events_architecture)