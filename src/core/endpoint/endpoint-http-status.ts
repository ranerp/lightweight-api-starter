import { constants } from "http2";

export enum EndpointHttpStatus {
    OK = constants.HTTP_STATUS_OK,
    ACCEPTED = constants.HTTP_STATUS_ACCEPTED,
}