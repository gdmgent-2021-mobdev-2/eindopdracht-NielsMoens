const { Client } = require('../models/Client');

class ClientController{
    getClients = async (req, res, next) => {
        try{
            const clients = await Client.find().exec()
            res.status(200).json(clients);
        } catch (e){
            next(e);
        }
    }

    createClients = async (req, res, next) => {
        try {
            const client = new Client(req.body);
            const c = await client.save();
            res.status(200).json(c);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = ClientController;
