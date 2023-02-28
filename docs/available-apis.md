---
id: available-apis
title: Available APIs
sidebar_label: Available APIs
---

Propel provides coarse-grained REST APIs that address common integration use cases. Endpoints are typically resource-based and accept JSON encoded request payloads and return JSON encoded responses using standard HTTP response codes and authentication mechanisms.

There are two APIs currently available. Both APIs require authentication and all requests are made within the scope of the permissions of the requesting user.

## Propel APIs

### [Propel Standard REST APIs](https://documenter.getpostman.com/view/18799091/2s93CSnVUm)
The standard APIs are resource-based endpoints for core objects in Propel. These APIs should be leveraged for use cases such as:
- Creating and updating Items and Changes
- Fetching a Bill of Materials (BOM)
- Creating Item Attachments

### [Propel Import REST API](https://documenter.getpostman.com/view/18799091/2s93CSnVUm#2c9b1d3b-dc05-497c-a304-4051540242eb)
The Propel Import API is meant for bulk data import operations that include objects: Items, BOMs, Manufacturer Parts.

The Propel Import API leverages Import V1 which can import up BOMs with up to 400 children. It may be necessary to chunk your transaction if your BOM is larger than this threshold.

:::caution Test in a Sandbox first

We recommend testing APIs in a [Sandbox environment](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&type=5) before working in Production environments.

:::

## Salesforce APIs
You can also leverage Salesforce APIs to interact with Propel data. It is useful to read [this article](https://help.salesforce.com/articleView?id=integrate_what_is_api.htm&type=5) to learn what is the right Salesforce API to use for your project.
### [SOAP API](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)
Use SOAP API to create, retrieve, update or delete records, such as accounts, leads, and custom objects. With more than 20 different calls, SOAP API also allows you to maintain passwords, perform searches, and much more. Use SOAP API in any language that supports Web services.

### [REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)
REST API provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it’s an excellent choice of technology for use with mobile applications and web projects. For certain projects, you may want to use REST API with other Salesforce REST APIs. To build UI for creating, reading, updating, and deleting records, including building UI for list views, actions, and dependent picklists, use User Interface API. To build UI for Chatter, communities, or recommendations, use Connect REST API. If you have many records to process, consider using Bulk API, which is based on REST principles and optimized for large sets of data.