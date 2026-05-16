import express from 'express';
import { login, postLogin } from '../controller/loginController.js';
import { getCadastro, postCadastro } from '../controller/cadastroController.js';
import { isGuest } from '../middleware/guestMiddleware.js';

const router = express.Router();

router.get('/', isGuest, login);
router.post('/login', postLogin);
router.get('/cadastro', isGuest, getCadastro);
router.post('/cadastrar', postCadastro);

export default router;