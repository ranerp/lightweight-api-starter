# Lite Rest API Starter

Simple server for Rest API that is built on top of Express. Right now it is pretty bare bones
and for example authorization middleware, test framework is not set in stone yet. Will be added soon. Do not worry.

## Working principle

Framework will auto discover the endpoints and will add them to the routes. Only thing you need to do is to add
them to the correct directory:

````text
src/modules/<arbitrary module name>/resources/<arbitrary endpoint>
````

All the endpoints should be anonymous classes and implement an Endpoint interface like this:

````text
export const endpoint = new class implements Endpoint {
    readonly path: PathParams = '/path/:id';
    readonly type: HttpMethod = HttpMethod.GET;

    async handler(input: EndpointInput): Promise<EndpointResponse> {
        return new EndpointResponse(`GET endpoint with id: ${input.params.id}`);
    }
};
````

## Development

To start the server and let the _nodemon_ worry about auto reloading the changes, run the following command:

```text
npm run dev
```

When you add a new endpoint under _resources_ in some _modules_ and implement the Endpoint interface it is available 
automatically.

Enjoy!