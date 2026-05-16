import express from 'express';
import { getReceita, postReceita, deleteReceita, getTemperatura, postTemperatura, updateTemperatura, createTemperatura, defineTemperatura, getIodo, postIodo, createIodo, updateIodo } from '../controller/receitaController.js';
import { isLogado } from '../middleware/guestMiddleware.js';
import { infoGlobal } from '../middleware/globalInfoUserMiddleware.js';

const router = express.Router();

router.get('/receita', isLogado, infoGlobal, getReceita);
router.post('/receita/criar', postReceita);
router.post('/receita/temperatura/editar', updateTemperatura);
router.get('/receita/temperatura/editar/:id', isLogado, infoGlobal, getTemperatura);
router.get('/receita/temperatura/criar/:id', isLogado, infoGlobal, createTemperatura);
router.post('/receita/temperatura/criar', postTemperatura);
router.post('/receita/temperatura/definir-temperatura', defineTemperatura);
router.post('/receita/deletar', deleteReceita);
router.get('/receita/iodo/criar/:id', isLogado, infoGlobal, createIodo);
router.get('/receita/iodo/editar/:id', isLogado, infoGlobal, getIodo);
router.post('/receita/iodo/editar', isLogado, infoGlobal, updateIodo);
router.post('/receita/iodo/criar', postIodo);

export default router;