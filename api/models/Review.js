const mongoose = require('mongoose');

//  schema
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    projectId : {
        type: 'ObjectId',
        required: true,
    },
    score: {
        type: "Number",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description : {
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



reviewSchema.virtual('project', {
    ref: 'Project',
    localField: 'projectId',
    foreignField: '_id',
    justOne: true,
});

//  models
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Review, reviewSchema,
};


