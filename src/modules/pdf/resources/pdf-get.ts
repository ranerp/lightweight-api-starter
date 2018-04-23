import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";

async function pdfGet(params: any): Promise<EndpointResponse> {
    return {
        body: `PDF GET endpoint with id: ${params.id}`,
        status: 200
    }
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/pdf/:id',
    function: pdfGet
};