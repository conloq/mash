import express from 'express';
import { usuario, logOutUsuario, updateUsuario, deleteUsuario, updateFotoUsuario } from '../controller/UsuarioController.js';
import upload from "../config/multer.js";
import { isLogado } from '../middleware/guestMiddleware.js';

const router = express.Router();

router.get('/usuario', isLogado, usuario);

router.get('/usuario/sair', logOutUsuario);

router.post('/usuario/atualizar', (updateUsuario));

router.get('/usuario/deletar', deleteUsuario);

router.post('/usuario/foto', upload.single('foto'), updateFotoUsuario);

export default router;