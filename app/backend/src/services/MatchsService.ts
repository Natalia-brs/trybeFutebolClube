import Team from '../database/models/Teams';
import MatchModel from '../database/models/Matches';

export default class TeamService {
  private model = MatchModel;

  public getAllMatches = async () => {
    const allMatches = await MatchModel.findAll({
      include: [
        { model: Team,
          as: 'homeTeam',
        },

        { model: Team,
          as: 'awayTeam',
        },
      ],
    });
    return { code: 200, data: allMatches };
  };

  public getInProgress = async (isProgress: string) => {
    const progress = isProgress === 'true';
    const inProgressMatches = await MatchModel.findAll({
      where:
        {
          inProgress: progress,
        },
      include: [
        { model: Team,
          as: 'homeTeam',
        },

        { model: Team,
          as: 'awayTeam',
        },
      ],
    });
    return { code: 200, data: inProgressMatches };
  };

  public updateFinished = async (id: string) => {
    await MatchModel.update({ inProgress: false }, { where: { id } });
    return { code: 200, message: 'Finished' };
  };

  public uptadeId = async (id: string, homeTeamGoals: number, awayTeamGoals: number) => {
    await MatchModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return { code: 200, data: { homeTeamGoals, awayTeamGoals } };
  };
}
