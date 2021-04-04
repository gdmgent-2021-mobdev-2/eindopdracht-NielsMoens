const mongoose = require('mongoose');

//  schema
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
});

//  models
const Client = mongoose.model('Client', clientSchema);

module.exports = {
    Client, clientSchema,
};


