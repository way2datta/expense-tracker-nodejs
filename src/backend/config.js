
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
export const apiServerPort = process.env.API_SERVER_PORT;
const databaseServer = process.env.DATABASE_SERVER;
const databasePort = process.env.DATABASE_PORT;
const databaseName = process.env.DATABASE_NAME;

export const databaseConnectionString = `mongodb://${databaseServer}:${databasePort}/${databaseName}`;