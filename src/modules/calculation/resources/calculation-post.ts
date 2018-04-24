import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";
import { EndpointHttpStatus } from "../../../core/endpoint/endpoint-http-status";

async function calculationPost(params: any): Promise<EndpointResponse> {
    return new EndpointResponse("Calculation POST endpoint", EndpointHttpStatus.ACCEPTED);
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation',
    function: calculationPost
};
