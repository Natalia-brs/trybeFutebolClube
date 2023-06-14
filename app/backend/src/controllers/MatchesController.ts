import { Request, Response } from 'express';
import MatchService from '../services/MatchsService';

export default class TeamsController {
  private matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.matchService.getAllMatches();
    return res.status(code).json(data);
  };
}
