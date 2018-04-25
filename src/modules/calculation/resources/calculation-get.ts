import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";
import { PathParams } from "express-serve-static-core";

export const endpoint = new class implements Endpoint {
    readonly path: PathParams = '/calculation/:id';
    readonly type: HttpMethod = HttpMethod.GET;

    async handler(input: EndpointInput): Promise<EndpointResponse> {
        return new EndpointResponse(`Calculation GET endpoint with id: ${input.params.id}`);
    }
};
