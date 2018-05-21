'use strict';

const Model = require('schwifty').Model;
const Joi = require('joi');

module.exports = (server) => {

    return class Users extends Model {
// module.exports = class Users extends Model {

        static get tableName() {
    // console.log('table name in b');
            return 'Users';
        }

        static get joiSchema() {

            return Joi.object({

                id: Joi.number().integer().min(1),
                email: Joi.string().email(),
                password: Joi.binary().allow(null),
                firstName: Joi.string(),
                lastName: Joi.string(),
                resetToken: Joi.binary().allow(null),
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

            json = super.$formatJson(json);
    console.log('formatjson in b');
            delete json.password;
            delete json.resetToken;

            return json;
        }

        $parseDatabaseJson(json) {

            json = super.$parseDatabaseJson(json);

            json.fullName = json.firstName + ' ' + json.lastName;
            return json;
        }

        $beforeInsert() {

            this.createdAt = new Date().toISOString();
            this.updatedAt = new Date().toISOString();
        }
        $beforeUpdate() {

            this.updatedAt = new Date().toISOString();
        }
    };
};
