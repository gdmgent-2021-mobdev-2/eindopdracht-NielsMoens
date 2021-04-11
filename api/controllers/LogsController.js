const {Logs} = require("../models/Logs");

class LogsController {
    getLogsByProject = async (req, res, next) => {
        try {
            const { user, params } = req;
            const { projectId } = params;

            let query = { projectId };

            // only admin can view all logs
            if (!user.isAdmin()) {
                query = {
                    ...query,
                    userId: user._id,
                };
            }
            const logs = await Logs.find(query).lean().populate("user", "name" ).exec();
            res.status(200).json(logs);
        } catch (e) {
            next(e);
        }
    }

    createLogByProject = async (req, res, next) => {
        try {
            const { user, params } = req;
            const { projectId } = params;

            const log = new Logs({
                ...req.body,
                userId: user._id,
                projectId: projectId,
            });
            const c = await log.save();
            res.status(200).json(c);
        } catch (e) {
            next(e);
        }
    }

    // getLogsById = async (req, res, next) => {
    //     try {
    //         const { id } = req.params;
    //         const Log = await Logs.findById(id).exec();
    //         if (Log) {
    //             const result = await Log.save();
    //             res.status(200).json(result);
    //         } else {
    //             next(new NotFoundError());
    //         }
    //     } catch (e) {
    //         next(e.errors ? new ValidationError(e) : e);
    //     }
    // }
    //
    // deleteLogsById = async (req, res, next) => {
    //     try {
    //         const { id } = req.params;
    //         const client = await Logs.findById(id).exec();
    //         if (client) {
    //             await client.remove();
    //             res.status(200).json({});
    //         } else {
    //             next(new NotFoundError());
    //         }
    //     } catch (e) {
    //         next(e);
    //     }
    // }
    // updateLogsById = async (req, res, next) => {
    //     try {
    //         const { id } = req.params;
    //         const client = await Logs.findById(id).exec();
    //         if (client) {
    //             // update
    //             client.overwrite(req.body);
    //             const result = await client.save();
    //             res.status(200).json(result);
    //         } else {
    //             next(new NotFoundError());
    //         }
    //     } catch (e) {
    //         next(e.errors ? new ValidationError(e) : e);
    //     }
    // }
}

module.exports = LogsController;
