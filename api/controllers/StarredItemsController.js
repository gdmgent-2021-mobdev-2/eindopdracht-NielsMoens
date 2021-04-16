const ValidationError = require("../errors/ValidationError");
const NotFoundError = require("../errors/UserNotFoundError");
const {StarredItems} = require("../models/StarredItems");

class StarredItemsController{
    getStarredItems = async (req, res, next) => {
        try {
            const { user } = req;
            // gehaald die op en dan gaje da uitvoeren die daje der uit wilt
            const projects = await StarredItems.find({userId: user._id}).lean().populate('project').exec();
            res.status(200).json(projects);
        } catch (e) {
            next(e);
        }
    }
    createStarredItems= async (req, res, next) => {
        try {
            const { user } = req;
            const starredItems = new StarredItems({
                ...req.body,
                userId: user._id,
            });
            const s = await starredItems.save();
            res.status(200).json(s);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    deleteStarredItems = async(req,res,next) => {
        try {
            const {user}= req;
            const {id} = req.params;
            const projects = await StarredItems.find({userId: user._id, projectId: id}).exec();
            if(projects) {
                projects.map( async(project) => {
                    await project.remove();
                })
                res.status(200).json('deleted');
            } else {
                next(new NotFoundError());
            }
        } catch(e) {
            next(e);
        }
    }



}

module.exports = StarredItemsController;
