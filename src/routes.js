import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => response.send('Hello World!'));

router.post('/register', (request, response)=> response.send("Register user"));
router.post('/login', (request, response)=> response.send("Login user"));

router.get('/users', (request, response)=> response.send("Get users"));
router.get('/users/:id', (request, response)=> response.send("Get user by id"));
router.delete('/users/:id', (request, response)=> response.send("Delete user by id"));
router.put('/users/:id', (request, response)=> response.send("Update user by id"));
router.post('/users', (request, response)=> response.send("Post users"));

router.get('/users/:id/expenses/categories', (request, response)=> response.send("Post expense categories for user"));
router.get('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Get expense categories for user by id"));
router.delete('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Delete expense categories for user by id"));
router.put('/users/:id/expenses/categories/:categoryId', (request, response)=> response.send("Update expense categories for user by id"));
router.post('/users/:id/expenses/categories', (request, response)=> response.send("Post expense categories for user"));


router.get('/users/:id/expenses/', (request, response)=> response.send("Get expense categories for user by id"));
router.get('/users/:id/expenses/:expenseId', (request, response)=> response.send("Get expense categories for user by id"));
router.delete('/users/:id/expenses/:expenseId', (request, response)=> response.send("Delete expense categories for user by id"));
router.put('/users/:id/expenses/categories/:expenseId', (request, response)=> response.send("Update expense categories for user by id"));
router.post('/users/:id/expenses', (request, response)=> response.send("Post expense categories for user"));

export default router;
