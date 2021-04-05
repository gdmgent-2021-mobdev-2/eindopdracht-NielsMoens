const ClientController  = require ('../controllers/ClientController');
const ProjectController =  require ('../controllers/ProjectController');
const UserController = require ('../controllers/Usercontroller');
const NotFoundError = require("../errors/UserNotFoundError");
const {authLocal} = require("../services/auth.services");

const projectController = new ProjectController();
const clientController =  new ClientController();
const userController = new UserController();

const RegisterRoutes = (app) => {

    // user
    app.post('/register', userController.register)
    app.post('/login',authLocal, userController.login)

    // client routes
    app.get('/clients', clientController.getClients)
    app.get('/clients/:id', clientController.getClientById)

    app.post('/clients', clientController.createClients)

    app.delete('/clients/:id', clientController.deleteClientById)

    app.patch('/clients/:id', clientController.updateClientById)

    // Projects
    app.get('/projects', projectController.getProjects)
    app.get('/projects/:id', projectController.getProjectById)

    app.post('/projects', projectController.createProject)

    app.delete('/projects/:id', projectController.deleteProjectById)

    app.patch('/projects/:id', projectController.updateProjectById)


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