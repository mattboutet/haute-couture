'use strict';

const HauteCouture = require('../..');
// const Schwifty = require('schwifty');

module.exports = {
    name: 'c',
    async register(server, options) {
        // await server.register({
        //     plugin: Schwifty,
        //     options: {
        //         knex: {
        //             client: 'pg',
        //             useNullAsDefault: true,
        //             connection: {
        //                 host: 'localhost',
        //                 user: 'nearpeer',
        //                 password: 'Cqn2xduKGBQE',
        //                 database: 'user-v17'
        //             }
        //         }
        //     }
        // });
        await HauteCouture.using()(server, options);
    }
};
