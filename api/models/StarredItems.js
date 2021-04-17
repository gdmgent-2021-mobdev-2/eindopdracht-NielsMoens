const mongoose = require("mongoose");

// Users schema
const starSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
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

starSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
});
starSchema.virtual('project', {
    ref: 'Project',
    localField: 'projectId',
    foreignField: '_id',
    justOne: true,
});

//  models
const StarredItems = mongoose.model('StarredItems', starSchema);

module.exports = {
    starSchema, StarredItems,
}