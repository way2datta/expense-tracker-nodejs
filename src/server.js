const express = require('express');
import routes from './routes/rest-api';

const app = express();
const port = 3000;

app.use('/', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 