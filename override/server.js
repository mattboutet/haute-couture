'use strict';

const Hapi = require('hapi');
const Schwifty = require('schwifty');

(async () => {

    const server = Hapi.server({
        host: '0.0.0.0',
        port: 3333,
        debug: {
            log: ['error', 'implementation', 'internal'],
            request: ['error', 'implementation', 'internal']
        }
    });
    await server.register({
        plugin: Schwifty,
        options: {
            knex: {
                client: 'pg',
                useNullAsDefault: true,
                connection: {
                    host: 'localhost',
                    user: 'nearpeer',
                    password: 'Cqn2xduKGBQE',
                    database: 'user-v17'
                }
            }
        }
    });
    await server.register(require('./c'));

    await server.start();

    console.log(`Started server ${server.info.uri}`);
})();

process.on('unhandledRejection', (err) => { throw err; });
