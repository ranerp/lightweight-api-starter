import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";


async function calculationGet(params: any): Promise<EndpointResponse> {
    return {
        body: `Calculation GET endpoint with id: ${params.id}`,
        status: 200
    }
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation/:id',
    function: calculationGet
};

