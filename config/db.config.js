"use strict";

var mongoose = require('mongoose');

function DbConfig(){}

DbConfig.init = function() {
    var URL = 'localhost/simple_node';

    mongoose.connect(URL);
    mongoose.connection.on('error', console.error.bind(console, 'Erro na conex�o com o banco.'));
}

module.exports = DbConfig;