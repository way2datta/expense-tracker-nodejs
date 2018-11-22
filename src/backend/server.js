const express = require('express');
import routes from './routes/rest-api';
import { join } from 'path';

const app = express();
const port = 3000;

app.use('/', routes);
app.use(express.static('dist'));
app.get('/admin', function(request, response) {
    response.sendFile(join(__dirname, './../frontend/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 