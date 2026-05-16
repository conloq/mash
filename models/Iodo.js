import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Iodo = connection.define('iodo', {
    tempo_primeira_coleta:{
        type: Sequelize.TIME,
        allowNull: false
    },
    intervalo_testes:{
        type: Sequelize.TIME,
        allowNull: false
    },
    qtd_max_testes:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    receita_id:{
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
            model: 'receitas',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },

})

export default Iodo;