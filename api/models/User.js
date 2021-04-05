// schema
const mongoose = require("mongoose");

// Users schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});


clientSchema.virtual('name').get(function() {
    const client = this;
    return `${client.firstName} ${client.lastName}`;
});

//  models
const User = mongoose.model('Client', userSchema);

module.exports = {
    userSchema, User
}