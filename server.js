"use strict";

var express = require('express');
var PORT = process.env.PORT || 3334;
var RoutesConfig = require('./config/routes.config');
var DbConfig = require('./config/db.config');
var Routes = require('./routes/routes');
var app = express();
var cluster = require('cluster');
var numCpus = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCpus; i++)
    {
        cluster.fork();
    }
}
else {
     DbConfig.init();
     RoutesConfig.init(app);
     Routes.init(app, express.Router());

    app.listen(PORT);

    console.log('Rodando em: %s', PORT);
}
