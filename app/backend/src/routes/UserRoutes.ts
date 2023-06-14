import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateUser, { passValid, emailValid } from '../middlewares/loginValidation';

const userController = new UserController();

const router = Router();

router.post('/', validateUser, passValid, emailValid, userController.userLogin);

export default router;
