import * as tl from "vsts-task-lib/task";
import { ServiceConnection } from "../../Common/ServiceConnection";

const serviceConnectionFieldName = "connectedServiceName";

const apiName = tl.getInput("apiName", true);
const outputVariable = tl.getInput("outputVariable", true);

let serviceConnection = new ServiceConnection();
let serviceConnectionInfo = serviceConnection.getAPIMManagementEndpointDetails(serviceConnectionFieldName);
tl.setVariable(outputVariable, serviceConnectionInfo.identifier);