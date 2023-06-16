import { Router } from 'express';
import LeaderController from '../controllers/LeaderBoardController';

const leaderController = new LeaderController();

const router = Router();

router.get('/home', leaderController.getAll);
router.get('/', leaderController.getAll);

export default router;
