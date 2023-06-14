import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const matchesController = new MatchesController();

const router = Router();

router.get('/', matchesController.getAll);

export default router;
