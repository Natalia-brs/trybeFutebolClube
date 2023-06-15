import { Request, Response } from 'express';
import MatchService from '../services/MatchsService';

export default class TeamsController {
  private matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress) {
      const { code, data } = await this.matchService.getInProgress(String(inProgress));
      return res.status(code).json(data);
    }
    if (inProgress === 'false') {
      const { code, data } = await this.matchService.getInProgress(String(inProgress));
      return res.status(code).json(data);
    }
    const { code, data } = await this.matchService.getAllMatches();
    return res.status(code).json(data);
  };
}
