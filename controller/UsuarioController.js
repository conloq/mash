import {Usuario, LogConexao} from "../config/associations.js";
import {hash} from "../services/bcrypt.js";

const usuario = async (req, res) => {
    try {
        const user = await Usuario.findOne({
            where: {
                id: req.session.userId
            }
        })

        const logUser = await LogConexao.findAll({
            where: {
                usuario_id: req.session.userId
            }
        })
        res.render('usuario', {
            user: user,
            logUser: logUser
        })
    } catch (error) {
        console.log(error)
    }
}

const logOutUsuario = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return res.send('Erro ao sair');
        }

        res.clearCookie('connect.sid');
        res.redirect('/');
    })
}

const updateUsuario = async (req, res) => {
    try {

        const novoNome = req.body.nome;
        const novoEmail = req.body.email;
        const novoTelefone = req.body.telefone;
        const novaSenha = req.body.senha;

        if(novaSenha.trim() == "") {
             await Usuario.update(
            {
                nome: novoNome,
                email: novoEmail,
                telefone:novoTelefone
            },
            {
                where: {id: req.session.userId}
            }
        )
        return res.redirect('/usuario');
        }

        const novaSenhaHash = await hash(novaSenha);

        await Usuario.update(
            {
                nome: novoNome,
                email: novoEmail,
                telefone:novoTelefone,
                senha: novaSenhaHash
            },
            {
                where: {id: req.session.userId}
            }
        )
        return res.redirect('/usuario');
        
    } catch (error) {
        console.log(error);
    }
}

const deleteUsuario = async (req, res) => {
    try {
        await Usuario.destroy({
        where: {
            id: req.session.userId
        }
    })
    req.session.destroy((err) => {
        if(err) {
            return res.send('Erro ao sair');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    })
    } catch (error) {
        console.log(error)
    }
}


const updateFotoUsuario = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Nenhuma imagem foi enviada.');
        }

        const nomeArquivo = req.file.filename;

        req.session.url_imagem = nomeArquivo;

        await Usuario.update(
            {
                url_imagem: nomeArquivo
            },
            {
                where: {id: req.session.userId}
            }
        )
        res.redirect('/usuario')
    } catch (error) {
        console.error(error);
    }
}

export {usuario, logOutUsuario, updateUsuario, deleteUsuario, updateFotoUsuario};