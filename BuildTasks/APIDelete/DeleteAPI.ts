import * as tl from "vsts-task-lib/task";
import * as common from "./common";

const serviceConnectionFieldName = "connectedServiceName";

const apiName = tl.getInput("apiName", true);
const outputVariable = tl.getInput("outputVariable", true);

let serviceConnection = common.getAPIMManagementEndpointDetails(serviceConnectionFieldName);
tl.setVariable(outputVariable, serviceConnection.identifier);