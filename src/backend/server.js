import express from 'express';
import { join } from 'path';
import mongoose from "mongoose";
import routes from './routes/rest-api';


const app = express();
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/expense-tracker");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.all('/server.*', function (request,response) {
    response.status(403).send({
       message: 'Access Forbidden'
    });
 });
app.use(express.static('dist'));
app.get('/admin', function(request, response) {
    response.sendFile(join(__dirname, './../frontend/index.html'));
});

app.listen(port, () => console.log(`Expense tracker app listening on port ${port}!`)); 