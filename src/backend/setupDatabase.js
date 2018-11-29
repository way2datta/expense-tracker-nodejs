import mongoose from 'mongoose';
import { databaseConnectionString } from "./config";

export function setupDatabase() {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.connect(databaseConnectionString);
}