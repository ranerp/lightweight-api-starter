import {PathParams} from "express-serve-static-core";
import {HttpMethod} from "../http/http-method";
import {EndpointResponse} from "./endpoint-response";

export interface Endpoint {
    readonly type: HttpMethod;
    readonly path: PathParams;

    handler(input: EndpointInput): Promise<EndpointResponse>;
}
