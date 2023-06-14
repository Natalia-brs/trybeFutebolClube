import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateUser from '../middlewares/loginValidation';

const userController = new UserController();

const router = Router();

router.post('/', validateUser, userController.userLogin);

export default router;