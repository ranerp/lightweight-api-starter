import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import handlers from "./handlers";
import { HttpMethod } from "./core/http-method";

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let router = express.Router();
router.get('/', (req, res, next) => {
    res.json({
        message: 'Harmonics Calculation API.'
    });
});

for (let handler of handlers) {
    switch(handler.type) {
        case HttpMethod.GET:
            router.get(handler.path, (req, res, next) => {
                handler.function(req.params)
            });
    }
}

app.use('/', router);

export default app;