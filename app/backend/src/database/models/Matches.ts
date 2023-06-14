import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Teams from './Teams';

// import OtherModel from './OtherModel';

class Match extends Model<InferAttributes<Match>,
InferCreationAttributes<Match>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  homeTeamId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  homeTeamGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  awayTeamId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  awayTeamGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

  inProgress: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Teams.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Teams.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayTeam' });
Match.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Match.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Match;
