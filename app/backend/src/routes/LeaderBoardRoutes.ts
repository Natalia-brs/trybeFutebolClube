import { Router } from 'express';
import LeaderController from '../controllers/LeaderBoardController';

const leaderController = new LeaderController();

const router = Router();

router.get('/home', leaderController.getAll);

export default router;
