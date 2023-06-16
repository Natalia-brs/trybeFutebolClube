import ILeaderboard from '../Interfaces/ILeaderBoard';

export default class MatchesResults {
  public name: string;

  public totalPoints: number;

  public totalGames: number;

  public totalVictories: number;

  public totalDraws: number;

  public totalLosses: number;

  public goalsFavor: number;

  public goalsOwn: number;

  constructor(name: string, matchs: ILeaderboard[]) {
    this.name = name;
    this.totalPoints = MatchesResults.getTotal(matchs);
    this.totalGames = matchs.length;
    this.totalVictories = MatchesResults.victories(matchs);
    this.totalDraws = MatchesResults.draws(matchs);
    this.totalLosses = MatchesResults.losses(matchs);
    this.goalsFavor = MatchesResults.favor(matchs);
    this.goalsOwn = MatchesResults.own(matchs);
  }

  private static getTotal = (matches: ILeaderboard[]) => {
    let totalPoints = 0;
    matches.forEach((match) => {
      if (match.goalsFavor > match.goalsOwn) totalPoints += 3;
      if (match.goalsFavor === match.goalsOwn) totalPoints += 1;
    });
    return totalPoints;
  };

  private static victories = (matches: ILeaderboard[]) => {
    let victories = 0;
    matches.forEach((match) => {
      if (match.goalsFavor > match.goalsOwn) victories += 1;
    });
    return victories;
  };

  private static draws = (matches: ILeaderboard[]) => {
    let draws = 0;
    matches.forEach((match) => {
      if (match.goalsFavor === match.goalsOwn) draws += 1;
    });
    return draws;
  };

  private static losses = (matches: ILeaderboard[]) => {
    let losses = 0;
    matches.forEach((match) => {
      if (match.goalsFavor < match.goalsOwn) losses += 1;
    });
    return losses;
  };
}
