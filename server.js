"use strict";

var express = require('express');
var PORT = process.env.PORT || 3334;
var RoutesConfig = require('./config/routes.config');
var DbConfig = require('./config/db.config');
var Routes = require('./routes/routes');
var app = express();

DbConfig.init();
RoutesConfig.init(app);
Routes.init(app, express.Router());

app.listen(PORT);

console.log('Rodando em: %s', PORT);
