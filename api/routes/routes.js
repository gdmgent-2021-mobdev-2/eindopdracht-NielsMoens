const ClientController  = require ('../controllers/ClientController')


const clientController =  new ClientController()

const RegisterRoutes = (app) => {
    app.get('/clients', clientController.getClients)
    app.post('/clients', clientController.createClients)

}
module.exports = {
    RegisterRoutes
}