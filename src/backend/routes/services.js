import { Router } from 'express';
import LoginController from '../controllers/loginController';
import AuthController from '../controllers/authController';
import UserController from '../controllers/userController';
import ExpenseCategoryController from '../controllers/expenseCategoryController';
import ExpenseController from '../controllers/expenseController';

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
router.post('/users', userController.create);

const expenseCategoryController = new ExpenseCategoryController();
router.get('/users/:id/expenses/categories', expenseCategoryController.getAll);
router.get('/users/:id/expenses/categories/:categoryId', expenseCategoryController.getById);
router.delete('/users/:id/expenses/categories/:categoryId', expenseCategoryController.delete);
router.put('/users/:id/expenses/categories/:categoryId', expenseCategoryController.update);
router.post('/users/:id/expenses/categories', expenseCategoryController.create);

const expenseController = new ExpenseController();
router.get('/users/:id/expenses/', expenseController.getAll);
router.get('/users/:id/expenses/:expenseId', expenseController.getById);
router.delete('/users/:id/expenses/:expenseId', expenseController.delete);
router.put('/users/:id/expenses/:expenseId', expenseController.update);
router.post('/users/:id/expenses', expenseController.create);

export default router;
