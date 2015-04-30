"use strict";

var dao = require('../dao/dao');

function Controller(){}

Controller.cria = function(req, res) {
    var _onSuccess = function(info) {
        res.status(201).json(info);
    }

    var _onError = function(error) {
        res.status(400).json(error);
    }

    var _novaInfo = req.body;

    dao
        .cria(_novaInfo)
        .then(_onSuccess)
        .catch(_onError);
}

module.exports = Controller;