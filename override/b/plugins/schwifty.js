'use strict';

module.exports = {
    plugins: {
        options: {
            migrationsDir: `${__dirname}/../migrations`,
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
    }
};
