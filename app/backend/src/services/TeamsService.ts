import TeamModel from '../database/models/Teams';

export default class TeamService {
  private model = TeamModel;

  public getAll = async () => {
    const allTeams = await this.model.findAll();
    return { code: 200, data: allTeams };
  };
}
