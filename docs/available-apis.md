---
id: available-apis
title: Available APIs
sidebar_label: Available APIs
---

Propel provides coarse-grained REST APIs that address common integration use cases. Endpoints are typically resource-based and accept JSON encoded request payloads and return JSON encoded responses using standard HTTP response codes and authentication mechanisms.

There are two APIs currently available. Both APIs require authentication and all requests are made within the scope of the permissions of the requesting user.

## Propel APIs

### [Propel Standard REST APIs](https://api-docs.propelplm.com/)
The standard APIs are resource-based endpoints for core objects in Propel. These APIs should be leveraged for use cases such as:
- Creating and updating Items and Changes
- Fetching a Bill of Materials (BOM)
- Creating Item Attachments

### [Propel Import REST API](https://documenter.getpostman.com/view/6385615/SVfKyr1m?version=latest)
The Propel Import API is meant for bulk data import operations that include objects: Items, BOMs, Manufacturer Parts.

The Propel Import API leverages Import V1 which can import up BOMs with up to 400 children. It may be necessary to chunk your transaction if your BOM is larger than this threshold.

:::caution Test in a Sandbox first

We recommend testing APIs in a [Sandbox environment](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&type=5) before working in Production environments.

:::

## Salesforce APIs
You can also leverage Salesforce APIs to interact with Propel data. It is useful to read [this article](https://help.salesforce.com/articleView?id=integrate_what_is_api.htm&type=5) to learn what is the right Salesforce API to use for your project.
### [SOAP API](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm)

### [REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)