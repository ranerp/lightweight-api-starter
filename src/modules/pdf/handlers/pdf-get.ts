import { HttpMethod } from "../../../core/http-method";
import { Endpoint } from "../../../core/endpoint";

async function pdfGet(params: any){
    return `PDF GET endpoint with id: ${params.id}`;
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/pdf/:id',
    function: pdfGet
};