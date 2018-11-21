import { Router } from 'express';
import { LoginController } from './controllers/loginController';
import { AuthController } from "./controllers/authController"; 
import { UserController } from "./controllers/userController";

const router = Router();

router.get('/', (request, response) => response.send('Hello World!'));

const loginController = new LoginController();
router.post('/login', loginController.execute);

const authController = new AuthController();
router.post('/authorize', authController.execute);

const userController = new UserController();

router.post('/register', userController.create);


router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.delete('/users/:id', userController.delete);
router.put('/users/:id', userController.update);

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
