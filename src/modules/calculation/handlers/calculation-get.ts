import { HttpMethod } from "../../../core/http-method";
import { Endpoint } from "../../../core/endpoint";

async function calculationGet(params: any){
    return `Calculator GET endpoint with id: ${params.id}`;
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: '/calculation/:id',
    function: calculationGet
};

