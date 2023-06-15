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
}
