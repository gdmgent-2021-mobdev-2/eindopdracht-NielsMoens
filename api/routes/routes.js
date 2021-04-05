const ClientController  = require ('../controllers/ClientController')
const NotFoundError = require("../errors/UserNotFoundError");


const clientController =  new ClientController()

const RegisterRoutes = (app) => {

    // client routes
    app.get('/clients', clientController.getClients)
    app.get('/clients/:id', clientController.getClientById)

    app.post('/clients', clientController.createClients)

    app.delete('/clients/:id', clientController.deleteClientById)

    app.patch('/clients/:id', clientController.updateClientById)


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