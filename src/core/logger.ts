import * as winston from 'winston';

export const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: 'mdh-backend-info.log',
            level: 'info',
            name: 'info-file',
        }),
        new (winston.transports.File)({
            filename: 'mdh-backend-error.log',
            level: 'error',
            name: 'error-file',
        }),
    ],
});
