'use strict';

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './../../webpack.config.dev'
import servicesRoutes from './routes/services';
import DatabaseInitializer from "./database/DatabaseInitializer";

const errorHandler = require('./ErrorHandler');

const app = express();
const DIST_DIR = __dirname;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));
// app.use(express.static('dist'));

(new DatabaseInitializer()).initialize();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', servicesRoutes);

app.all('/server.*', (request, response) => {
    response.status(403).send({
        message: 'Access Forbidden',
    });
});

const LANDIND_PAGE = path.join(DIST_DIR, 'index.html');
app.get('*', (request, response, next) => {
    compiler.outputFileSystem.readFile(LANDIND_PAGE, (errorWhileServingLandingPage, result) => {
        if (errorWhileServingLandingPage) {
            return next(errorWhileServingLandingPage)
        }
        response.set('content-type', 'text/html')
        response.send(result)
        response.end()
    })
})


// const AnyUrl = '*';

// app.get(AnyUrl, (request, response) => {
//     response.sendFile("index.html", { root: path.join('dist') })
// });

app.use(errorHandler);

const apiServerPort = require("./config").apiServerPort;
app.listen(apiServerPort, () => console.log(`Expense tracker app listening on port ${apiServerPort}!`));
