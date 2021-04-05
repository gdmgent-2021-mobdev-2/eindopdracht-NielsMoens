const express = require('express');
const cors = require('cors');

const registerMiddleware = (app) => {
    // allow all cors
    app.use(cors())

    // use json
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true,
    }));
};

module.exports = {
    registerMiddleware
};
