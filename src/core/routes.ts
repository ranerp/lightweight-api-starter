import * as urlJoin from 'url-join';
import { HttpMethod } from "./http/http-method";
import endpoints from "./resources";
import { Router } from "express";
import { IRouterMatcher } from "express-serve-static-core";

const router = Router();

const routerMethods = {
    [HttpMethod.GET]: router.get.bind(router),
    [HttpMethod.POST]: router.post.bind(router),
    [HttpMethod.PUT]: router.put.bind(router),
    [HttpMethod.PATCH]: router.patch.bind(router),
    [HttpMethod.DELETE]: router.delete.bind(router),
};

const endpointPrefix = '/api';

router.get('/', ((req, res) => {
    res.send('Lightweight REST API Starter');
}));

for (let endpoint of endpoints) {
    const routePath = urlJoin(endpointPrefix, endpoint.path.toString());
    const routerMethod: IRouterMatcher<any> = routerMethods[endpoint.type];

    if(!routerMethod) {
        continue;
    }

    routerMethod(routePath, async (req, res) => {
        try {
            const {status, body} = await endpoint.handler({
                params: req.params,
                query: req.query,
                body: req.body,
                request: req,
                response: res
            });

            res.status(status).json(body);
        }
        catch (error) {
            res.status(400).json({error});
        }
    });
}

export default router;