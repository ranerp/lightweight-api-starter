import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";

async function pdfGet(params: any): Promise<EndpointResponse> {
    return new EndpointResponse("Calculation POST endpoint");
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/pdf/:id',
    function: pdfGet
};