import { HttpMethod } from "../../../core/http/http-method";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";
import { Endpoint } from "../../../core/endpoint/endpoint";

async function calculationPost(params: any): Promise<EndpointResponse> {
    return {
        body: "Calculation POST endpoint",
        status: 200
    };
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation',
    function: calculationPost
};
