import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const matchesController = new MatchesController();

const router = Router();

router.get('/', matchesController.getAll);
router.patch('/:id/finish', validateToken, matchesController.finishedMatch);

export default router;
