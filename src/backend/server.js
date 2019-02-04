'use strict';
import app from './app'
import Logger from "./Logger";
const apiServerPort = require("./config").apiServerPort;

app.listen(apiServerPort, () =>
    Logger.log(`Expense tracker app listening on port ${apiServerPort}!`));
