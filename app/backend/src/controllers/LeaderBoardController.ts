import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class TeamsController {
  private leaderBoardService: LeaderBoardService;

  constructor() {
    this.leaderBoardService = new LeaderBoardService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.leaderBoardService.getAll();
    return res.status(code).json(data);
  };
}
