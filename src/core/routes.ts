import * as urlJoin from 'url-join';
import { HttpMethod } from "./http/http-method";
import handlers from "./handlers";
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
    res.send('Lightweight API Starter');
}));

for (let handler of handlers) {
    const handlerEndpoint = urlJoin(endpointPrefix, handler.path);
    const routerMethod: IRouterMatcher<any> = routerMethods[handler.type];

    if(!routerMethod) {
        continue;
    }

    routerMethod(handlerEndpoint, (req, res) => {
        handler.function(req.params).then( content => {
            res.status(content.status).json(content.body);
        });
    });
}

export default router;