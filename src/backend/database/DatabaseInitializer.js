import { databaseConnectionString } from "./../config";

export default class DatabaseInitializer {
    initialize() {
        const mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);
        mongoose.connect(databaseConnectionString);
    }
}