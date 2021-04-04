const mongoose = require('mongoose');
const express = require('express');
const MongoClient = require('./db/MongoClient')
const {RegisterRoutes} = require("./routes/routes");

// import env file
require('dotenv').config();

// connect with db
const db = new MongoClient()
db.connect();

const app = express();
const port = process.env.NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

//register routes
RegisterRoutes(app);

app.use( (req, res, ) =>  {
    res.status(404).json({ error: "Sorry can't find that!"})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
    db.disconnect();
    process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());