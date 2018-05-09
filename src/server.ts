import app from './app';
import { normalizePort } from './utils/network';
import { logger } from './core/logger';

const port = normalizePort(process.env.PORT) || 3000;

export const server = app.listen(port, () => {
    logger.info(
        `App running at http://localhost:${port} in ${app.get('env')} mode.`,
    );
});
