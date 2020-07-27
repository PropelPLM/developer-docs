---
id: salesforce-vs-propel
title: When to use Salesforce vs Propel APIs
sidebar_label: Salesforce vs Propel APIs
---

Because Propel is built on the Salesforce Platform, as a developer, you have access to features from both systems. Salesforce has its own APIs which can be leveraged when Propel APIs do not suffice for your use case.

The distinction between Propel APIs and Salesforce APIs can be thought of as coarse-grained vs fine-grained APIs. While Propel APIs have business logic embedded in them, Salesforce APIs operate at a more granular level. An example of this is how you would create a new Item record with the Propel API versus how you would do the same with the Salesforce API.

Here are some high-level use cases and when you might want to use certain APIs:

|                                      | Propel Standard API | Propel Import API | Salesforce REST API (Query) | Salesforce REST API (Object) |
|--------------------------------------|---------------------|-------------------|-----------------------------|------------------------------|
| CRUD Propel Objects (PDLM Namespace) |          X          |                   |                             |                              |
| Bulk Insert/Upsert PLM Data          |                     |         X         |                             |                              |
| Bulk Fetch Data                      |                     |                   |              X              |                              |
| Query for Data with Criteria         |                     |                   |              X              |                              |
| CRUD Custom Objects                  |                     |                   |                             |               X              |

&nbsp;  
&nbsp;  
:::tip Rule of Thumb
**If you've tried with Propel APIs and have exhausted all options, use Salesforce APIs.** This may require you to implement some of Propel's business logic in your code. 
:::

## Example: Creating an Item

### Propel Standard API
To create a new Item in Propel via the Propel API, only one request is needed.

Simply make a `POST` request to the following endpoint while passing the `category` of Item:

``` curl title="Endpoint"
POST https://{{orgURL}}.salesforce.com/services/apexrest/PDLM/api/v2/item
```
``` json title="Request Payload"
{
    "category": "Capacitor"
}
```

The Propel Endpoint will:
1. Resolve the category name to an Id 
2. Insert a new `PDLM__Item__c`
3. Insert a new `PDLM__Item_Revision__c`

All of the actions will occur in one transaction initiated via the API.

### Salesforce API
To create a new Item in Propel via the Salesforce API, you must follow these steps:
Make a `POST` request to the following endpoint to insert a new `PDLM__Item__c` record: 

&nbsp;  
**First**, query for the `Category` Id.
``` curl title="Endpoint"
GET https://{{orgId}}.salesforce.com/services/data/v20.0/query/?q=select Id from PDLM__Category__c where Name = 'Capacitor'
```
&nbsp;  
&nbsp;  
**Second**, using the Id you received from step one, insert a new `PDLM__Item__c` record.
``` curl title="Endpoint"
POST https://{{orgId}}.salesforce.com/services/data/v20.0/sobjects/PDLM__Item__c
```
``` json title="Request Payload"
{
	"PDLM__Category__c": "a0B3j00000v31SKEAY"
}
```
&nbsp;  
&nbsp;  
**Third**, using the Item Id from the second step, make another call to insert the `PDLM__Item_Revision__c` record.
``` curl title="Endpoint"
POST https://{{orgId}}.salesforce.com/services/data/v20.0/sobjects/PDLM__Item_Revision__c
```
``` json title="Request Payload"
{
	"PDLM__Master_Item__c": "a0X3j00000CU1CjEAL"
}
```

  
And then, finally, after three separate transactions you've created an Item. As you can see, leveraging the Propel APIs can be beneficial to minimize the number of API requests you need to make as well as simplifying your application. Additionally, Propel APIs are maintained and versioned by Propel and we will not make breaking changes to our APIs if the underlying schema changes unlike Salesforce APIs.