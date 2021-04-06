const express = require('express');
const ClientController = require("../controllers/ClientController");
const ProjectController = require("../controllers/ProjectController");

const clientController = new ClientController();
const projectController = new ProjectController();

const authRouter = express.Router();

// client routes
authRouter.get('/clients', clientController.getClients)
authRouter.get('/clients/:id', clientController.getClientById)

authRouter.post('/clients', clientController.createClients)

authRouter.delete('/clients/:id', clientController.deleteClientById)

authRouter.patch('/clients/:id', clientController.updateClientById)

// Projects
authRouter.get('/projects', projectController.getProjects)
authRouter.get('/projects/:id', projectController.getProjectById)

authRouter.post('/projects', projectController.createProject)

authRouter.delete('/projects/:id', projectController.deleteProjectById)

authRouter.patch('/projects/:id', projectController.updateProjectById)

module.exports = authRouter;