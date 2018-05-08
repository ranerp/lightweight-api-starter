import { PathParams } from "express-serve-static-core";
import { Endpoint } from "../../../core/endpoint/endpoint";
import { EndpointHttpStatus } from "../../../core/endpoint/endpoint-http-status";
import { EndpointResponse } from "../../../core/endpoint/endpoint-response";
import { HttpMethod } from "../../../core/http/http-method";

export const endpoint = new (class implements Endpoint {
    public readonly path: PathParams = "/calculation";
    public readonly type: HttpMethod = HttpMethod.POST;

    public async handler(input: EndpointInput): Promise<EndpointResponse> {
        return new EndpointResponse("Calculation POST endpoint", EndpointHttpStatus.ACCEPTED);
    }
})();
