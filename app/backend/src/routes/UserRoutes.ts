import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateUser, { passValid, emailValid } from '../middlewares/loginValidation';
import validateToken from '../middlewares/validateToken';

const userController = new UserController();

const router = Router();

router.post('/', validateUser, passValid, emailValid, userController.userLogin);
router.get('/role', validateToken, userController.userRole);

export default router;
