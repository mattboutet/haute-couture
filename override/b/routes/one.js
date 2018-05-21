'use strict';

module.exports = {
    method: 'get',
    path: '/one',
    handler: async (request, h) => {

        const { Users } = request.models(true);
// console.log(request.models(true));
        return await Users.query();
    }
};
