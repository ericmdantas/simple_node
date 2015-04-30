"use strict";

var bodyParser = require('body-parser');
var morgan = require('morgan');

function RoutesConfig(){}

RoutesConfig.init = function(app) {
    app.use(morgan('dev'))
    app.use(bodyParser());
}

module.exports = RoutesConfig;