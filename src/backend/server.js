import express from 'express';
import { join } from 'path';
import mongoose from 'mongoose';
import servicesRoutes from './routes/services';
import { databaseConnectionString, apiServerPort } from "./config";

const app = express();

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(databaseConnectionString);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', servicesRoutes);
app.all('/server.*', (request, response) => {
    response.status(403).send({
        message: 'Access Forbidden',
    });
});
app.use(express.static('dist'));
app.get('/admin', (request, response) => {
    response.sendFile(join(__dirname, './../frontend/index.html'));
});

app.listen(apiServerPort, () => console.log(`Expense tracker app listening on port ${apiServerPort}!`));
