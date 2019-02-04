import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import ExpenseCategoryController from '../controllers/ExpenseCategoryController';
import ExpenseController from '../controllers/ExpenseController';

const router = Router();

const loginController = new LoginController();
router.post('/login', loginController.execute);

const authController = new AuthController();
router.post('/authorize', authController.execute);

const userController = new UserController();
router.post('/register', userController.register);
router.get('/users', userController.getAll);
router.get('/users/:userId', userController.getById);
router.delete('/users/:userId', userController.delete);
router.put('/users/:userId', userController.update);

const expenseCategoryController = new ExpenseCategoryController();
router.get('/users/:id/expenses/categories/count', expenseCategoryController.getCount);
router.get('/users/:id/expenses/categories', expenseCategoryController.getPaginated);
router.get('/users/:id/expenses/categories/all', expenseCategoryController.getAll);
router.get('/users/:id/expenses/categories/:categoryId', expenseCategoryController.getById);
router.delete('/users/:id/expenses/categories/:categoryId', expenseCategoryController.delete);
router.put('/users/:id/expenses/categories/:categoryId', expenseCategoryController.update);
router.post('/users/:id/expenses/categories', expenseCategoryController.create);

const expenseController = new ExpenseController();
router.get('/users/:id/expenses/all', expenseController.getAll);
router.get('/users/:id/expenses/', expenseController.getPaginated);
router.get('/users/:id/expenses/:expenseId', expenseController.getById);
router.delete('/users/:id/expenses/:expenseId', expenseController.delete);
router.put('/users/:id/expenses/:expenseId', expenseController.update);
router.post('/users/:id/expenses', expenseController.create);

export default router;
