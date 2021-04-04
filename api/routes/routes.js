const ClientController  = require ('../controllers/ClientController')


const clientController =  new ClientController()

const RegisterRoutes = (app) => {

    // client routes
    app.get('/clients', clientController.getClients)
    app.get('/clients/:id', clientController.getClientById)

    app.post('/clients', clientController.createClients)

    app.delete('/clients/:id', clientController.deleteClientById)

    app.patch('/clients/:id', clientController.updateClientById)



}
module.exports = {
    RegisterRoutes
}