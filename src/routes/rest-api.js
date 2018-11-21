import { Router } from 'express';
import { LoginController } from '../controllers/loginController';
import { AuthController } from "../controllers/authController"; 
import { UserController } from "../controllers/userController";
import { ExpenseCategoryController } from "../controllers/expenseCategoryController";
import { ExpenseController } from "../controllers/expenseController";

const router = Router();

router.get('/', (request, response) => response.send('Hello World!'));

const loginController = new LoginController();
router.get('/userJWTValidation', loginController.execute);

const authController = new AuthController();
router.get('/JwtValidation', authController.execute);

const userController = new UserController();
router.get('/creationOfUserDetails', userController.create);
router.get('/getAllusersDetails', userController.getAll);
router.get('/fetchUserDetails', userController.getById);
router.get('/deletionOfUserDetails', userController.delete);
router.get('/updationOfUserDetails', userController.update);

const expenseCategoryController = new ExpenseCategoryController();
router.get('/getExpenseCategoryOfUsers', expenseCategoryController.getAll);
router.get('/getExpenseCategoryOfUser', expenseCategoryController.getById);
router.get('/deletionExpenseCategoryOfUser', expenseCategoryController.delete);
router.get('/updationExpenseCategoryOfUser', expenseCategoryController.update);
router.get('/creationOfExpenseCategoryOfUser', expenseCategoryController.create);

const expenseController = new ExpenseController();
router.get('/getExpenseCategoryOfUsers', expenseController.getAll);
router.get('/getExpenseCategoryOfUser', expenseController.getById);
router.get('/deletionOfExpenseCategoryOfUser', expenseController.delete);
router.get('/updationOfExpenseOfUser', expenseController.update);
router.get('/creationOfExpenseOfUser', expenseController.create);

export default router;
