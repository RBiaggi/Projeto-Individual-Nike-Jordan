var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome  = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    if (nome == undefined) {
        res.status(400).send("Nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function autenticar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Senha está undefined!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function(resultado) {
                if (resultado.length == 1) {
                    res.json({
                        idUsuario: resultado[0].idUsuario,
                        nome:      resultado[0].nome,
                        email:     resultado[0].email
                    });
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválidos!");
                } else {
                    res.status(403).send("Erro inesperado!");
                }
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    autenticar
};