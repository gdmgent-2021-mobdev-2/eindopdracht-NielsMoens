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
}, {
    timestamps: true,
    // triggered when it's converted to json
    toJSON: {
        virtuals: true,
    },
    // triggered when the data comes out of the db and is converted to an object
    toObject: {
        virtuals: true,
    }
});

// // if the client gets deleted the project will also be deleted
// // not se
// clientSchema.pre('remove', function() {
//     const client = this;
//     return Project.remove({ clientId: client._id });
// });

clientSchema.virtual('name').get(function() {
    const client = this;
    return `${client.firstName} ${client.lastName}`;
});

//  models
const Client = mongoose.model('Client', clientSchema);

module.exports = {
    Client, clientSchema,
};


