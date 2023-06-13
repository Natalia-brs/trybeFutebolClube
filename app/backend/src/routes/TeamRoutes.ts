import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const teamsController = new TeamsController();

const router = Router();

router.get('/', teamsController.getAll);
router.get('/:id', teamsController.getById);

export default router;
