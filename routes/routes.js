"use strict";

var controller = require('../controllers/controller');

function Routes(){}

Routes.init = function(app, router) {
    router
        .route('/api/alguma-coisa')
        .post(controller.cria);

    app.use('/', router);
}

module.exports = Routes;