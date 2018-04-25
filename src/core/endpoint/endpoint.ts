import { HttpMethod } from "../http/http-method";
import { PathParams } from "express-serve-static-core";
import { EndpointResponse } from "./endpoint-response";

export interface Endpoint {
    readonly type: HttpMethod;
    readonly path: PathParams;
    handler(input: EndpointInput) : Promise<EndpointResponse>;
}