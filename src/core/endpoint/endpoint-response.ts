import {EndpointHttpStatus} from "./endpoint-http-status";

export class EndpointResponse {
    constructor(public body: any, public status: EndpointHttpStatus = EndpointHttpStatus.OK) {
    }
}
