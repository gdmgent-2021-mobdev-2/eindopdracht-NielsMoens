const LocalStrategy = require('passport-local');
const passport = require('passport');
const AuthError = require('../../errors/AuthorizationError');
const localStrategy = require("./localStrategy");
const jwtStrategy = require("./jwtStrategy");
const ForbiddenError = require("../../errors/ForbiddenError");
const {User} = require("../../models/User");

// 2 strategies
// local strategy for login with username and password

passport.use('local',localStrategy);
passport.use('jwt',jwtStrategy);

const passportWithErrorHandling = (strategy) => {
    return function (req, res, next){
        passport.authenticate(strategy, { session: false }, function (err, user){
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(new AuthError() );
            } else {
                req.user = user;
                return next();
            }
        })(req, res, next);
    }
}

const authLocal = passportWithErrorHandling('local');
const authJwt = passportWithErrorHandling('jwt');

const withRole = (role) => (req, res, next) => {
    const { user } = req;
    if (user.role === role) {
        next();
    } else{
        next(new ForbiddenError())
    }
}

module.exports = {
    authLocal, authJwt, withRole
}