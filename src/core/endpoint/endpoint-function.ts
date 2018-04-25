import { EndpointResponse } from "./endpoint-response";

export interface EndpointFunction {
    (input: EndpointInput): Promise<EndpointResponse>
}