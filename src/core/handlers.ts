import * as glob from 'glob';
import * as path from 'path';
import { Endpoint } from "./endpoint/endpoint";

const modulesPath = path.resolve(`${__dirname}/../modules`);
const handlerPaths = `${modulesPath}/**/handlers/*.ts`;

const handlers: Endpoint[] = glob
    .sync(handlerPaths)
    .map( file => {
        return require(file).endpoint;
    });

export default handlers;
