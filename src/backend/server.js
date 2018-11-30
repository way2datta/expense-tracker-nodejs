import express from 'express';
import servicesRoutes from './routes/services';

const app = express();

setupDatabase();
setupBodyParser();
setupApiRoutes();
setupRestrictionForAccessingServerResources();
setupMiddlewareThatServesStaticFiles();
setupDefaultPage();
setupApiServerPortAndListen();


function setupDefaultPage() {
    const join = require('path');
    app.get('/', (request, response) => {
        response.sendFile(join(__dirname, './../frontend/index.html'));
    });
}

function setupApiServerPortAndListen() {
    const apiServerPort = require("./config").apiServerPort;
    app.listen(apiServerPort, () => console.log(`Expense tracker app listening on port ${apiServerPort}!`));
}

function setupMiddlewareThatServesStaticFiles() {
    app.use(express.static('dist'));
}

function setupRestrictionForAccessingServerResources() {
    app.all('/server.*', (request, response) => {
        response.status(403).send({
            message: 'Access Forbidden',
        });
    });
}

function setupBodyParser() {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

function setupDatabase() {
    const databaseConnectionString = require("./config").databaseConnectionString;
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.connect(databaseConnectionString);
}

function setupApiRoutes() {

    app.use('/api/', servicesRoutes);
}

