import { Request, Response, NextFunction } from 'express';

const validateMatch = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (!homeTeamId || !awayTeamId) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};

export default validateMatch;
