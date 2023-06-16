import LeaderBoard from './LeaderBoard';
import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

export default class LeaderBoardService {
  public orderLeader = (matchs: LeaderBoard[]) =>
    matchs.sort((prev, next) => {
      let comp = next.totalPoints - prev.totalPoints;
      if (!comp) comp = next.totalVictories - prev.totalVictories;
      if (!comp) comp = next.goalsBalance - prev.goalsBalance;
      if (!comp) comp = next.goalsFavor - prev.goalsFavor;
      if (!comp) comp = next.goalsOwn - prev.goalsOwn;
      return comp;
    });

  public getAll = async () => {
    const allTeams = await Team.findAll();
    const allMatchs = await Match.findAll({ where: { inProgress: false } });
    const matches: LeaderBoard[] = [];

    allTeams.forEach((team) => {
      const filter = allMatchs.filter((matchId) => matchId.homeTeamId === team.id);

      const again = filter.map(({ homeTeamGoals, awayTeamGoals }) => ({
        goalsFavor: homeTeamGoals,
        goalsOwn: awayTeamGoals,
      }));

      matches.push(new LeaderBoard(team.teamName, again as []));
    });

    return { code: 200, data: this.orderLeader(matches) };
  };
}

// pegar todos os time
// filtro pegando o id  do time e se a partida esta em progresso ou nao
// instanciar a classe passando o nome do time e as partidas filtradas
// criar um array adicionando cada classe que foi instanciada
// usar o push ou spread ou concat
