// import env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('./db/MongoClient');
const {registerMiddleware} = require("./middleware/registerMiddleware");
const {RegisterRoutes} = require("./routes/routes");


// connect with db
const db = new MongoClient()
db.connect();

const app = express();
const port = process.env.PORT;

//middleware
registerMiddleware(app);

//register routes
RegisterRoutes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
    db.disconnect();
    process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());