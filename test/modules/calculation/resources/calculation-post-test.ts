import * as request from 'request';
import * as urlJoin from 'url-join';
import { EndpointHttpStatus } from '../../../../src/core/endpoint/endpoint-http-status';
import { createServer } from '../../../shared';

const port = 3000;
const baseUrl = `http://localhost:${port}/api`;

describe('Calculation POST Endpoint Tests', () => {

    let server;

    beforeAll(async () => {
        server = await createServer(port);
    });

    afterAll(() => {
        server.close();
    });

    describe('POST /', () => {

        const path = urlJoin(baseUrl, 'calculation');

        it('returns status code 202', (done) => {
            request.post(path, (error, response) => {
                expect(response.statusCode).toBe(EndpointHttpStatus.ACCEPTED);
                done();
            });
        });
    });
});
