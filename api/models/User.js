// schema
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {ExtractJwt, Strategy} = require("passport-jwt");

// Users schema

const Roles = {
    admin: 'admin',
    user: 'user',
}
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
        enum: [Roles.user, Roles.admin],
        default: Roles.user,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});

// every time before a user is saved do this ->
userSchema.pre('save', function(next) {
    const user = this;

    // if psw is changed
    if (!user.isModified('password')) {
        return next();
    }

    //  if pervious is true -> use bcrypt to hash it
    try {
        bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) {
                throw err;
            }
            user.password = hash;
            return next();
        });

    } catch (err) {
        return next(err);
    }
});

// compare the user password with the hashed password on the db to see if they match
userSchema.methods = {
    comparePassword: function(password) {
        const user = this;
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    reject(err);
                }
            });
        });
    },
    createToken: function () {
        const user = this;
        return jwt.sign({_id: user._id, }, process.env.JWT_SECRET, {
            expiresIn:60 * 120,
        });
    },
    isAdmin: function() {
        return this.role === Roles.admin;
    },
};

//  models
const User = mongoose.model('User', userSchema);

module.exports = {
    userSchema, User, Roles
}