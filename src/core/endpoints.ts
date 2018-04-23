import * as glob from 'glob';
import * as path from 'path';
import { Endpoint } from "./endpoint/endpoint";

const modulesPath = path.resolve(`${__dirname}/../modules`);
const handlerPaths = `${modulesPath}/**/endpoints/*.ts`;

const endpoints: Endpoint[] = glob
    .sync(handlerPaths)
    .map( file => {
        return require(file).endpoint;
    });

export default endpoints;
