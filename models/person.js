'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = Schema({
    name: { 
        type: String,
        required: true 
    },
    age: { 
        type: Number,
        required: true 
    },
    sex: { 
        type: String,
        required: true 
    },
    code: { 
        type: String,
        required: true 
    },
    state: {
        type: Number,
        default: 1,
    }
});


module.exports = mongoose.model('Person', PersonSchema);