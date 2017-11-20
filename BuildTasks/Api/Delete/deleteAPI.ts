import * as tl from "vsts-task-lib/task";
import { Common } from "./references";

const serviceConnectionFieldName = "connectedServiceName";

const apiName = tl.getInput("apiName", true);
const outputVariable = tl.getInput("outputVariable", true);

let serviceConnection = new Common.ServiceConnection();
let serviceConnectionInfo = serviceConnection.getAPIMManagementEndpointDetails(serviceConnectionFieldName);
tl.setVariable(outputVariable, serviceConnectionInfo.identifier);