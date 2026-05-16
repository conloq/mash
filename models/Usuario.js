import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";


const Usuario = connection.define('usuario',{
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
       type: Sequelize.STRING,
        allowNull: true,
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    url_imagem: {
        type: Sequelize.STRING,
        allowNull: true, 
    }
});


export default Usuario;