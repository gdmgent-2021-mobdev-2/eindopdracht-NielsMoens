const mongoose = require('mongoose');

// schema
const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    projectId: {
        type: 'ObjectId',
        required: true,
    },
    userId: {
        type: 'ObjectId',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }
});

logSchema.virtual('projects', {
    ref: 'Projects',
    localField: 'projectId',
    foreignField: '_id',
    justOne: true,
});

logSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
});


const Logs = mongoose.model('Logs', logSchema);

// model
module.exports = {
    Logs, logSchema,
}