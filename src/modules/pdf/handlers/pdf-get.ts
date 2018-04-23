import { HttpMethod } from "../../../core/http-method";
import { Endpoint } from "../../../core/endpoint";

async function pdfGet(){
    return "PDF GET endpoint";
}

export const endpoint: Endpoint = {
    type: HttpMethod.GET,
    path: 'pdf',
    function: pdfGet
};