var lookModel = require("../models/lookModel");

function salvar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var estilo = req.body.estiloServer;
    var nota = req.body.notaServer;
    var compatibilidade = req.body.compatibilidadeServer;

    if (idUsuario == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else if (estilo == undefined) {
        res.status(400).send("Estilo está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Nota está undefined!");
    } else if (compatibilidade == undefined) {
        res.status(400).send("Compatibilidade está undefined!");
    } else {
        lookModel.salvar(idUsuario, estilo, nota, compatibilidade)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    lookModel.buscarPorUsuario(idUsuario)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvar,
    buscarPorUsuario
};
