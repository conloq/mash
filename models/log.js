import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const LogConexao = connection.define("Historico_Login", {
    endereco_ip : {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_hora : {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
    },
    localidade : {
        type: Sequelize.STRING,
        allowNull: false
    },
    status : {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    usuario_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
});

export default LogConexao;