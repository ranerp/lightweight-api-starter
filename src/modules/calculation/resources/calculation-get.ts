import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";


async function calculationGet(params: any): Promise<EndpointResponse> {
    return new EndpointResponse(`Calculation GET endpoint with id: ${params.id}`);
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation/:id',
    function: calculationGet
};

