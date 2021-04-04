// import env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('./db/MongoClient');
const cors = require('cors');
const {RegisterRoutes} = require("./routes/routes");


// connect with db
const db = new MongoClient()
db.connect();

const app = express();
const port = process.env.NODE_PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

//register routes
RegisterRoutes(app);

// TODO clean error handling
// default 404
app.use( (req, res, ) =>  {
    res.status(404).json({ error: "Sorry can't find that!"})
})

// Error 500
app.use( (err,req, res,next ) =>  {
    res.status(404).send(err);
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