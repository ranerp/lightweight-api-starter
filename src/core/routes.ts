import * as urlJoin from 'url-join';
import { HttpMethod } from "./http-method";
import handlers from "./handlers";
import { Router } from "express";
import { IRouterMatcher } from "express-serve-static-core";

const router = Router();

const endpointPrefix = '/api';

router.get('/', ((req, res) => {
    res.send('Lightweight API Starter');
}));

for (let handler of handlers) {
    let routerMethod: IRouterMatcher<any> = null;

    let handlerEndpoint = urlJoin(endpointPrefix, handler.path);

    switch(handler.type) {
        case HttpMethod.GET:
            routerMethod = router.get.bind(router);
            break;
        case HttpMethod.POST:
            routerMethod = router.post.bind(router);
            break;
        case HttpMethod.PUT:
            routerMethod = router.put.bind(router);
            break;
        case HttpMethod.PATCH:
            routerMethod = router.patch.bind(router);
            break;
        case HttpMethod.DELETE:
            routerMethod = router.delete.bind(router);
            break;
        default:
            break;
    }

    if(!routerMethod) {
        continue;
    }

    routerMethod(handlerEndpoint, (req, res) => {
        handler.function(req.params).then( content => {
            res.json(content);
        });
    });
}

export default router;