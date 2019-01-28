'use strict';
import app from './app'

const apiServerPort = require("./config").apiServerPort;
app.listen(apiServerPort, () =>
    console.log(`Expense tracker app listening on port ${apiServerPort}!`));
