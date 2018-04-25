import * as glob from 'glob';
import * as path from 'path';
import { Endpoint } from "./endpoint/endpoint";

const modulesPath = path.resolve(`${__dirname}/../modules`);
const endpointPaths = `${modulesPath}/**/resources/**/*.ts`;

const endpoints: Endpoint[] = glob
    .sync(endpointPaths)
    .map( file => {
        return require(file).endpoint;
    });

export default endpoints;
