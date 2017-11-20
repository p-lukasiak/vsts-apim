//  W A R N I N G!
// This file is copied to each build task.
// Any change should be made in the file that is in the Common folder

import * as tl from "vsts-task-lib/task";

export module Common {
    export class ServiceConnection {
        /**
         * Get the APIM Management Service endpoint details to be used for all the operations.
         *
         * @param  {string="connectedServiceName"} inputFieldName
         * @returns string
         */
        getAPIMManagementEndpointDetails(inputFieldName): any {
            const apimMgmtEndpoint = tl.getInput(inputFieldName, true);

            const hostUrl = tl.getEndpointUrl(apimMgmtEndpoint, false);
            const auth = tl.getEndpointAuthorization(apimMgmtEndpoint, false);
            const identifier = auth.parameters["identifier"];
            const key = auth.parameters["key"];
            
            return {
                "url": hostUrl,
                "identifier": identifier,
                "key": key,
            }
        }
    }
}