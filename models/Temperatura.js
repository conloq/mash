import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Temperatura = connection.define("temperaturas", {
  rampa_temperatura_minima: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rampa_temperatura_maxima: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  temp_maxima_limite: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  temp_minima_limite: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  temporizador: {
    type: Sequelize.DataTypes.TIME,
    allowNull: false,
  },
  inicializacao: {
    type: Sequelize.DataTypes.TIME,
    allowNull: false,
  },
  tempo_ideal: {
    type: Sequelize.DataTypes.TIME,
    allowNull: false,
  },
  temperatura_ativa: {
    type: Sequelize.BOOLEAN,
    allowNull: false, 
    defaultValue: false,
  },
  receita_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "receitas",
      key: "id",
    },
    onDelete: 'CASCADE'
  },
});

export default Temperatura;
