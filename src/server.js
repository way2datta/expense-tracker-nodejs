import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => response.send('Hello World!'));

app.post('/register', (request, response)=> response.send("Register user"));
app.post('/login', (request, response)=> response.send("Login user"));

app.get('/users', (request, response)=> response.send("Get users"));
app.get('/users/:id', (request, response)=> response.send("Get user by id"));
app.delete('/users/:id', (request, response)=> response.send("Delete user by id"));
app.put('/users/:id', (request, response)=> response.send("Update user by id"));
app.post('/users', (request, response)=> response.send("Post users"));

app.get('/users/:id/expenses/categories', (request, response)=> response.send("Post expense categories for user"));
app.get('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Get expense categories for user by id"));
app.delete('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Delete expense categories for user by id"));
app.put('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Update expense categories for user by id"));
app.post('/users/:id/expenses/categories', (request, response)=> response.send("Post expense categories for user"));


app.get('/users/:id/expenses/', (request, response)=> response.send("Get expense categories for user by id"));
app.get('/users/:id/expenses/:expenseId', (request, response)=> response.send("Get expense categories for user by id"));
app.delete('/users/:id/expenses/:expenseId', (request, response)=> response.send("Delete expense categories for user by id"));
app.put('/users/:id/expenses/categories/:expenseId', (request, response)=> response.send("Update expense categories for user by id"));
app.post('/users/:id/expenses', (request, response)=> response.send("Post expense categories for user"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 