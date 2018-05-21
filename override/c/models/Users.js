'use strict';

const Model = require('schwifty').Model;
const Joi = require('joi');
// const MyModel = require('../../b/models/Users.js');

// module.exports = (server) => {

    // return class Users extends require('../../b/models/Users.js') {
    // return class Users extends Model {
module.exports = class Users extends Model {

        static get tableName() {

            return 'Users';
        }

        static get joiSchema() {

            return Joi.object({

                id: Joi.number().integer().min(1),
                email: Joi.string().email(),
                // password: Joi.binary().allow(null),
                // firstName: Joi.string(),
                // lastName: Joi.string(),
                // resetToken: Joi.binary().allow(null),
                createdAt: Joi.date().iso(),
                updatedAt: Joi.date().iso()
            });
        }

        static get relationMappings() {

            return {
                tokens: {
                    relation: Model.HasManyRelation,
                    modelClass: require('./Tokens'),
                    // modelClass: server.models().Tokens,
                    join: {
                        from: 'Users.id',
                        to: 'Tokens.userId'
                    }
                }
            };
        }

        $formatJson(json) {
    console.log('formatjson in c');
            json = super.$formatJson(json);

            return json;
        }
    // };
};
