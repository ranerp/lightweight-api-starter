import { HttpMethod } from "./http-method";
import { PathParams } from "express-serve-static-core";

export interface Endpoint {
    type: HttpMethod;
    path: PathParams;
    function: Function;
}