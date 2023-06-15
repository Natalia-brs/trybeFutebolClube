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

  public finishedMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    Number(id);
    const { code, message } = await this.matchService.updateFinished(id);
    return res.status(code).json({ message });
  };

  public updateId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const uptade = await this.matchService
      .uptadeId(id, homeTeamGoals, awayTeamGoals);
    return res.status(uptade.code).json(uptade.data);
  };
}
