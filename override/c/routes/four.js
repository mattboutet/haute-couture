'use strict';

module.exports = {
    method: 'get',
    path: '/four',
    handler: async (request, h) => {

        const { Users } = request.models();
        const foo = new Users;
        // console.log('which one? ',foo.$formatJson);
// console.log('all models',request.models(true));
// console.log('just mine  (using)', request.models());
        return await Users.query();
    }
};
