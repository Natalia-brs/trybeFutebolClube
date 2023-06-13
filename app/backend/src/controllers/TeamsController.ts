import { Request, Response } from 'express';
import TeamService from '../services/TeamsService';

export default class TeamsController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.teamService.getAll();
    return res.status(code).json(data);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { code, data } = await this.teamService.getById(id);
    return res.status(code).json(data);
  };
}
