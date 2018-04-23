import * as glob from 'glob';
import * as path from 'path';
import { Endpoint } from "./core/endpoint";

const handlerPaths = path.resolve(`${__dirname}/modules`);
const globPathToHandlers = `${handlerPaths}/**/handlers/*.ts`;

const handlers: Endpoint[] = glob
    .sync(globPathToHandlers)
    .map( file => {
        return require(file).endpoint;
    });

export default handlers;
