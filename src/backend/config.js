const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
export const apiServerPort = process.env.API_SERVER_PORT;
const databaseServer = process.env.DATABASE_SERVER;
const databaseName = process.env.DATABASE_NAME;
const databaseUserName = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;

export const databaseConnectionString = `mongodb+srv://${databaseUserName}:${databasePassword}@${databaseServer}/${databaseName}`;