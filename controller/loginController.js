import Usuario from "../models/Usuario.js";
import {comparePasswordHash} from "../services/bcrypt.js";
import {LogConexao} from "../config/associations.js";

const login = (req, res) => {
    res.render("login");
};

const postLogin = async (req, res) => {
    try {
        const {email, senha} = req.body;

        const user = await Usuario.findOne({
            where: {
                email:email
            }
        })
        if(!user) {
            return res.send("Usuario nâo encontrado!");
        }


        const isValidPassword = await comparePasswordHash(senha, user.senha);

        if(!isValidPassword) {
            return res.send("Senha incorreta");
        }

        req.session.userId = user.id;
        req.session.userEmail = user.email;
        req.session.nome = user.nome;
        req.session.url_imagem = user.url_imagem;

        try {
            let ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
            ip = ip.replace('::ffff:', '');
            console.log(ip)
            const api = `http://ip-api.com/json/${ip}`;

            const response = await fetch(api);
            const data = await response.json();

            let localidade = "localHost";

            if(data.country && data.city) localidade = `${data.city} , ${data.country}`

            const validIp = await LogConexao.findOne({
                where: {
                    endereco_ip: ip,
                    usuario_id: req.session.userId
                }
            });

            const ipConhecido = validIp !== null;

            await LogConexao.create({
                endereco_ip: ip,
                localidade: localidade,
                status: ipConhecido,
                usuario_id: req.session.userId
                });
        } catch (error) {
            console.error(error);
        }
        res.redirect('/usuario');
    } catch (error) {
        console.log(error);
    }
}

export {login, postLogin};