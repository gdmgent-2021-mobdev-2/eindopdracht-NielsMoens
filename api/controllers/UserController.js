const ValidationError = require('../errors/ValidationError');
const NotFoundError = require("../errors/UserNotFoundError");
const { User } = require('../models/User');

class UserController {
    getUsers = async (req, res, next) => {
        try {
            const users = await User.find().exec();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }

    getUserById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id).exec();
            if (user) {
                res.status(200).json(user);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }

    updateUserById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id).exec();
            if (user) {
                user.overwrite(req.body);
                const result = await user.save();
                res.status(200).json(result);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }


    deleteUserById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id).exec();
            if (user) {
                await user.remove();
                res.status(200).json({});
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e);
        }
    }
    updateClientById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const client = await Client.findById(id).exec();
            if (client) {
                // update
                client.overwrite(req.body);
                const result = await client.save();
                res.status(200).json(result);
            } else {
                next(new NotFoundError());
            }
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }
    register = async (req, res, next) => {
        try {
            const user = new User(req.body);
            const u = await user.save();
            res.status(200).json(u);
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);
        }
    }

    login = async (req, res, next) => {
        const { user } = req;
        const { email, role, _id, name, img } = req.user;
        res.status(200).json({
            email,
            role,
            _id,
            name,
            img,
            token: user.createToken(),
        });
    };

}

module.exports = UserController;