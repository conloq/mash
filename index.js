import express from "express";

// Models
import Usuario from "./models/Usuario.js";
// import Receita from "./models/Receita.js";
// import Temperatura from "./models/Temperatura.js";

import {conexao, createDataBase} from "./config/data-base.js";
import { Receita, Temperatura, Iodo, LogConexao } from "./config/associations.js";

// Rotas
import routerCadLog from "./routes/route.js";
import routerUser from "./routes/usuarioRoutes.js";
import routerReceita from "./routes/receitaRoutes.js";

import configSession from "./config/session.js";

conexao();

createDataBase();

//Sincronizando os models e transformando as funceos em promessas
Promise.all(
    [
        //Model.sync({force: false}),
        Usuario.sync({force: false}),
        Receita.sync({force: false}),
        Temperatura.sync({force: false}),
        Iodo.sync({force: false}),
        LogConexao.sync({force: false})

    ]
).then(() => {
    console.log("Entidades sincronizadas");
}).catch(erro => {
    console.log("Ocorreu erro ao sincronizar os models: " + erro);
});

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(configSession);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rotas
app.use('/', routerCadLog);
app.use('/', routerUser);
app.use('/', routerReceita);

const port = 8080;
app.listen(port, function(error){
    if(error){
        console.log("Ocorreu um erro!"+ error)
    } else{
        console.log(`Servidor iniciando com sucesso em http://localhost:${port}`)
    }
});