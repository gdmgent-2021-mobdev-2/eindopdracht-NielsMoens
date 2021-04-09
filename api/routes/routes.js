const ClientController  = require ('../controllers/ClientController');
const ProjectController =  require ('../controllers/ProjectController');
const UserController = require ('../controllers/UserController');
const NotFoundError = require("../errors/UserNotFoundError");
const authRouter = require("./authRoutes");
const {authJwt} = require("../services/auth/auth.services");
const {authLocal, } = require("../services/auth/auth.services");

const projectController = new ProjectController();
const clientController =  new ClientController();
const userController = new UserController();

const RegisterRoutes = (app) => {

    // user
    app.post('/register', userController.register)
    app.post('/login', authLocal, userController.login)

    //TODO make special admin routes
    // example
    // app.use('/admin', authJwt, authRouter)

    app.use(authJwt, authRouter)

    // default 404
    app.use((req, res, next) => {
        next(new NotFoundError());
    });

    // error handler
    app.use(function (err, req, res, next){
        res.status(err.statusCode || 500);
        res.json(err);
    });

}
module.exports = {
    RegisterRoutes
}