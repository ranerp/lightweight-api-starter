import { EndpointResponse } from "./endpoint-response";

export interface EndpointFunction {
    (params: any): Promise<EndpointResponse>
}