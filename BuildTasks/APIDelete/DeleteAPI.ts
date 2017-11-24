import * as tl from "vsts-task-lib/task";
import * as common from "./Common";

const httpMethod = "DELETE";
const serviceConnectionFieldName = "connectedServiceName";

// Retrive API details
const apiName = tl.getInput("apiName", true);
const subscriptionId = tl.getInput("subscriptionId", true);
const resourceGroupName = tl.getInput("resourceGroupName", true);
const serviceName = tl.getInput("serviceName", true);
const apiVersion = tl.getInput("apiVersion", true);

// Retrive API Management connection details
const serviceConnection = common.getAPIMManagementEndpointDetails(serviceConnectionFieldName);

// Create the request URL
const restResource = serviceConnection.url
+ "/subscriptions/" + subscriptionId
+ "/resourceGroups/" + resourceGroupName
+ "/providers/Microsoft.ApiManagement"
+ "/service/" + serviceName
+ "/apis/" + apiName
+ "?api-version=" + apiVersion;

// Send the request to API Management
const headers = JSON.parse("{''}");
common.restCall(serviceConnection, restResource, httpMethod, "", headers);
