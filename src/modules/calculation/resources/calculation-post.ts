import { HttpMethod } from "../../../core/http/http-method";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";
import { PathParams } from "express-serve-static-core";
import { EndpointHttpStatus } from "../../../core/endpoint/endpoint-http-status";

export const endpoint = new class implements Endpoint {
    readonly path: PathParams = '/calculation';
    readonly type: HttpMethod = HttpMethod.GET;

    async handler(input: EndpointInput): Promise<EndpointResponse> {
        return new EndpointResponse("Calculation POST endpoint", EndpointHttpStatus.ACCEPTED);
    }
};