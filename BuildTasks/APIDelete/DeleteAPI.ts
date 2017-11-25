import * as tl from "vsts-task-lib/task";
import * as common from "./Common";

// Retrive API details
const apiName = tl.getInput("apiName", true);

// Retrive API Management connection details
const serviceConnection = common.getAPIMManagementEndpointDetails("connectedServiceName");

// Create the request URL
const restResource = "/apis/" + apiName;

// Send the request to API Management
console.log("Call DELTE method to delete API");
common.restCall(serviceConnection, restResource, "DELETE", "", {});
