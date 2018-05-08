export function normalizePort(val: string | undefined): number | false {
    if (val === undefined) {
        return false;
    }

    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return false;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
