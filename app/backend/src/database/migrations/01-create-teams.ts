import { Model, QueryInterface, DataTypes } from 'sequelize';
import Iteams from '../../Interfaces/ITeams'

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Iteams>>('teams', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      teamName: {
        allowNull: false,
        field: 'team_name',
        type: DataTypes.STRING
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('teams');
  },
};