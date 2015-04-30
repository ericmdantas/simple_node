"use strict";

var Promise = require('bluebird');
var mongoose = require('mongoose');
var infoSchema = require('../model/model').infoSchema;

infoSchema.statics.cria = function(info) {

    return new Promise(function(resolve, reject)
    {
        InfoModel.collection.insert(info, function(err, infoCreated)
        {
            err ? reject(err)
                : resolve(infoCreated);
        });
    });
}

var InfoModel = mongoose.model('Info', infoSchema);

module.exports = InfoModel;