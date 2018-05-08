import {PathParams} from "express-serve-static-core";
import {Endpoint} from "../../../core/endpoint/endpoint";
import {EndpointResponse} from "../../../core/endpoint/endpoint-response";
import {HttpMethod} from "../../../core/http/http-method";

export const endpoint = new (class implements Endpoint {
    public readonly path: PathParams = "/calculation/:id";
    public readonly type: HttpMethod = HttpMethod.GET;

    public async handler(input: EndpointInput): Promise<EndpointResponse> {
        return new EndpointResponse(`Calculation GET endpoint with id: ${input.params.id}`);
    }
})();
