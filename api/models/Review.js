const mongoose = require('mongoose');

//  schema
const reviewSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    score: {
        type: "Number",
        required: true,
    },
    title : {
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


reviewSchema.virtual('name').get(function() {
    const review = this;
    return `${review.firstName} ${review.lastName}`;
});

//  models
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Review, reviewSchema,
};


