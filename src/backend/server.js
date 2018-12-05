import express from 'express';
import servicesRoutes from './routes/services';
import DatabaseInitializer from "./database/DatabaseInitializer";

const app = express();

(new DatabaseInitializer()).initialize();
setupBodyParser();
setupApiRoutes();
setupRestrictionForAccessingServerResources();
setupMiddlewareThatServesStaticFiles();
setupDefaultPage();
setupApiServerPortAndListen();


function setupDefaultPage() {
    const AnyUrl = '*';
    const join = require('path').join;
    app.get(AnyUrl, (request, response) => {
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

function setupApiRoutes() {
    app.use('/api/', servicesRoutes);
}

