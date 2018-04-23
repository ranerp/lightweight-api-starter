export interface EndpointFunction {
    (params: any): Promise<any>
}