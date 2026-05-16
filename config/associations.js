import Usuario from "../models/Usuario.js";
import Receita from "../models/Receita.js";
import Temperatura from "../models/Temperatura.js";
import Iodo from "../models/Iodo.js";
import LogConexao from "../models/log.js";

// USUARIO
Receita.belongsTo(Usuario, {
  foreignKey: "usuario_id",
});

Usuario.hasMany(Receita, {
  foreignKey: "usuario_id",
});

// Temperatura
Temperatura.belongsTo(Receita, {
  foreignKey: "receita_id"
});

Receita.hasMany(Temperatura, {
  foreignKey: "receita_id"
});

// IODO
Iodo.belongsTo(Receita, {
  foreignKey: "receita_id",
});

Receita.hasMany(Iodo, {
  foreignKey: "receita_id",
});

// LOG
LogConexao.belongsTo(Usuario, {
  foreignKey: "usuario_id"
})

Usuario.hasMany(LogConexao, {
  foreignKey: "usuario_id"
})

export {Usuario, Receita, Temperatura, Iodo, LogConexao}
