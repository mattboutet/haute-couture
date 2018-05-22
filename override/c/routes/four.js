'use strict';

module.exports = {
    method: 'get',
    path: '/four',
    handler: async (request, h) => {

        const { Users } = request.models();

        return await Users.query().eager('tokens');
    }
};
