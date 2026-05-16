import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Receita = connection.define("receitas", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'id'
        }
    }
});

export default Receita;
