import * as glob from 'glob';

const appPath = `${process.cwd()}/src/**/server.ts`;

export async function createServer(port: number) {

    process.env.PORT = String(port);

    const servers = await glob
        .sync(appPath)
        .map(file => {
            return require(file);
        });

    return servers[0].server;
}
