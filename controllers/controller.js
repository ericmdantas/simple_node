"use strict";

var dao = require('../dao/dao');

function Controller(){}

Controller.cria = function(req, res) {
    var _novaInfo = req.body;

    dao.cria(_novaInfo);

    res.end();
}

module.exports = Controller;