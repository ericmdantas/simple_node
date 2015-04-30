"use strict";

var mongoose = require('mongoose');

var _infoSchema = mongoose.Schema({
    email: {type: String, index: true},
    algumaCoisaId: {type: String, index: true},
    algumaOutraCoisa: {type: String}
})

exports.infoSchema = _infoSchema;