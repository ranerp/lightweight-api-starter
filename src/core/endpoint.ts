import { HttpMethod } from "./http-method";
import { PathParams } from "express-serve-static-core";
import { EndpointFunction } from "./endpoint-function";

export interface Endpoint {
    type: HttpMethod;
    path: PathParams;
    function: EndpointFunction;
}