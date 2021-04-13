const ValidationError = require("../errors/ValidationError");
const NotFoundError = require("../errors/UserNotFoundError");
const { Review } = require('../models/Review');

class ReviewController{
    getReviews = async (req, res, next) => {
        try{
            const projects = await Review.find().lean().populate('project', ['name']).exec();
            res.status(200).json(projects);
        } catch (e){
            next(e);
        }
    }

    getProjectById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const project = await Review.findById(id).populate('project').exec();
            if (project) {
                res.status(200).json(project);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }
    createReviews = async (req, res, next) => {
        try {
            const review = new Review(req.body);
            const c = await review.save();
            res.status(200).json(c);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }


    deleteReviewsById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const review = await Review.findById(id).exec();
            if (review) {
                await review.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }
}

module.exports = ReviewController;
