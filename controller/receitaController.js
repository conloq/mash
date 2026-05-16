// import Temperatura from "../models/Temperatura.js";
// import Iodo from "../models/Iodo.js";
// import Receita from "../models/Receita.js";

import { Receita, Temperatura, Iodo } from "../config/associations.js";
import { where } from "sequelize";

const getReceita = async (req, res) => {
  try {
    const receitas = await Receita.findAll({
      where: {
        usuario_id: req.session.userId,
      },
      include: [
        {
          model: Temperatura,
          as: 'temperaturas',
          required: false,  
          where:{
            temperatura_ativa: true
          }
        },
      ],
    });
    res.render("receita", {
      receitas: receitas,
    });
  } catch (error) {
    console.log("Erro ao obter Receita: " + error);
  }
};

const postReceita = async (req, res) => {
  const nome = req.body.nome;

  try {
    const receita = await Receita.create({
      nome: nome,
      usuario_id: req.session.userId,
    });
    res.redirect(`/receita/temperatura/criar/${receita.id}`);
  } catch (error) {
    console.log("Erro ao criar receita: " + error);
  }
};

const deleteReceita = async (req, res) => {
  const receitaId = req.body.receitaId;
  const temperaturaId = req.body.temperaturaId;

  try {
    await Receita.destroy({
      where: {
        id: receitaId,
        usuario_id: req.session.userId,
      },
    });

    res.redirect("/receita");
  } catch (error) {
    console.log("Erro ao deletar receita: " + error);
  }
};

const postTemperatura = async (req, res) => {
  const temperaturaMinima = req.body.temperaturaMinima;
  const temperaturaMaxima = req.body.temperaturaMaxima;
  const temporizador = req.body.temporizador;
  const inicializacao = req.body.inicializacao;
  const limiteMinimoTemperatura = req.body.limiteMinimoTemperatura;
  const limiteMaximoTemperatura = req.body.limiteMaximoTemperatura;
  const tempoIdeal = req.body.tempoIdeal;
  const receitaId = req.body.receitaId;

  try {

    const quantidadeTemperatura = await Temperatura.count({
      where:{
        receita_id: receitaId
      }
    })

    //Verificando se ja tem temperatura cadastrada para deixar como padrao ativa
    const ativa = quantidadeTemperatura === 0 ? true : false;

    await Temperatura.create({
      rampa_temperatura_minima: temperaturaMinima,
      rampa_temperatura_maxima: temperaturaMaxima,
      temporizador: temporizador,
      inicializacao: inicializacao,
      temp_minima_limite: limiteMinimoTemperatura,
      temp_maxima_limite: limiteMaximoTemperatura,
      tempo_ideal: tempoIdeal,
      temperatura_ativa: ativa,
      receita_id: receitaId, // Aqui o Sequelize faz o vínculo
    });
    res.redirect("/receita/iodo/criar/"+receitaId);
  } catch (error) {
    console.log("Erro ao criar temperatura: " + error);
  }
};

const createTemperatura = async (req, res) => {

  const receitaId = req.params.id;

  res.render('adicionarTemperatura', {
    receitaId: receitaId
  });

}

const getTemperatura = async (req, res) => {
  const receitaId = req.params.id;

  try {
    const temperaturas = await Temperatura.findAll({
      where: {
        receita_id: receitaId,
      },
    });

    const temperaturaEditar = temperaturas.find(t => t.temperatura_ativa === true);

    res.render("editarTemperatura", {
      receitaId: receitaId,
      temperaturas: temperaturas,
      temperatura: temperaturaEditar
    });
  } catch (error) {
    console.log("Erro ao obter Temperatura: " + error);
  }
};

const updateTemperatura = async (req, res) => {

  const receitaId = req.body.receitaId;
  const temperaturaId = req.body.temperaturaId;

  // 1. Extraímos os dados do corpo da requisição
  const {
    temperaturaMinima,
    temperaturaMaxima,
    limiteMaximaTemperatura,
    limiteMinimoTemperatura,
    temporizador,
    inicializacao,
    tempoIdeal
  } = req.body;

  try {
    await Temperatura.update(
      {
        rampa_temperatura_minima: temperaturaMinima,
        rampa_temperatura_maxima: temperaturaMaxima,
        temp_maxima_limite: limiteMaximaTemperatura,
        temp_minima_limite: limiteMinimoTemperatura,
        temporizador: temporizador,
        inicializacao: inicializacao,
        tempo_ideal: tempoIdeal,
        receita_id: receitaId,
      },
      {
        where: { id: temperaturaId },
      },
    );

    // Opcional: Redirecionar ou enviar resposta de sucesso
    res.redirect('/receita');
  } catch (error) {
    console.error("Erro ao atualizar Temperatura: ", error);
  }
};

const defineTemperatura = async (req, res) => {

  const receitaId = req.body.receitaId;
  const temperaturaId = req.body.temperaturaId;

  try{

    //Tirando a temperatura selecionada
    await Temperatura.update(
      {
        temperatura_ativa: false,
      },
      {
        where:{
          receita_id: receitaId
        }
      },
    )

    await Temperatura.update(
      {
        temperatura_ativa: true,
      },
      {
        where:{
          id: temperaturaId
        }
      }
    );

    res.redirect(`/receita/temperatura/editar/${receitaId}`);

  }catch(error){
    console.log("Erro ao definir temperatura: " + error);
  }

}

const createIodo = async (req, res) => {

  const receitaId = req.params.id;

  res.render('adicionarIodo', {
    receitaId: receitaId
  });
}

const getIodo = async (req, res) => {
  const receitaId = req.params.id;

  try {
    const iodo = await Iodo.findOne({
      where: {
        receita_id: receitaId,
      },
    });

    res.render("editarIodo", {
      receitaId: receitaId,
      iodo: iodo
    });
  } catch (error) {
    console.log("Erro ao obter Iodo: " + error);
  }
};

const postIodo = async (req, res) => {
  const temp_primeira_coleta = req.body.primeiraColeta;
  const qtd_maxima_testes = req.body.quantidadeMaxima;
  const intervalo_testes = req.body.intervalo;
  const receitaId = req.body.receitaId;

  try {
    await Iodo.create({
      tempo_primeira_coleta: temp_primeira_coleta,
      qtd_max_testes: qtd_maxima_testes,
      intervalo_testes: intervalo_testes,
      receita_id: receitaId
    });
    res.redirect("/receita");
  } catch (error) {
    console.log(error);
  }
};

const updateIodo = async (req, res) => {

  const receitaId = req.body.receitaId;
  const iodoId = req.body.iodoId;

  // 1. Extraímos os dados do corpo da requisição
  const {
    primeiraColeta,
    quantidadeMaxima,
    intervalo,
  } = req.body;

  try {
    await Iodo.update(
      {
        tempo_primeira_coleta: primeiraColeta,
        qtd_max_testes: quantidadeMaxima,
        intervalo_testes: intervalo,
        receita_id: receitaId
      },
      {
        where: { id: iodoId },
      },
    );

    // Opcional: Redirecionar ou enviar resposta de sucesso
    res.redirect('/receita');
  } catch (error) {
    console.error("Erro ao atualizar Iodo: ", error);
  }
};

export {
  getReceita,
  updateIodo,
  postReceita,
  deleteReceita,
  getTemperatura,
  postTemperatura,
  updateTemperatura,
  createTemperatura,
  defineTemperatura,
  getIodo,
  postIodo,
  createIodo
};
