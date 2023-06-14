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
}
