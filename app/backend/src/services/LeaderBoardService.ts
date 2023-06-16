import LeaderBoard from './LeaderBoard';
import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

export default class LeaderBoardService {
  private modelTeam = Team;
  private modelMatch = Match;
  private _matches: LeaderBoard[] = [];

  public getAll = async () => {
    const allTeams = await this.modelTeam.findAll();
    const allMatchs = await this.modelMatch.findAll();

    allTeams.forEach((team) => {
      const filter = allMatchs.filter((matchId) => matchId.homeTeamId === team.id
      && matchId.inProgress === false);

      const again = filter.map(({ homeTeamGoals, awayTeamGoals }) => ({
        homeTeamGoals,
        awayTeamGoals,
      }));

      const arrayMatches = new LeaderBoard(team.teamName, again as any);
      this._matches.push(arrayMatches);
    });
    return { code: 200, data: this._matches };
  };
}

// pegar todos os time
// filtro pegando o id  do time e se a partida esta em progresso ou nao
// instanciar a classe passando o nome do time e as partidas filtradas
// criar um array adicionando cada classe que foi instanciada
// usar o push ou spread ou concat
