import Usuario from "../models/Usuario.js";
import {hash} from "../services/bcrypt.js";

const getCadastro = (req, res) =>{
    res.render('cadastro');
}

const postCadastro = async (req, res) =>{
    console.log("Post");
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = await hash(req.body.senha);

        try {
            await Usuario.create({
                nome: nome,
                email: email,
                senha: senha
            });
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
}



export {getCadastro, postCadastro};