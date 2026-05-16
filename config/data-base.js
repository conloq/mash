import connection from "./sequelize-config.js";

async function conexao() {
    try {
        await connection.authenticate();
        console.log("Conexão com o banco de dados realizada com sucesso");
    }
    catch (error) {
        console.log(`Ocorreu um erro ao tentar se conectar ao banco: ${error}`);
    }
}

async function createDataBase() {
    try {
        await connection.query("CREATE DATABASE IF NOT EXISTS cervejaria ");
        console.log("Banco de dados criado com sucesso.");
    } catch (error) {
        console.log(`Ocorreu um erro ao criar o banco de dados: ${error}`);
    }
}
 
export {conexao, createDataBase};