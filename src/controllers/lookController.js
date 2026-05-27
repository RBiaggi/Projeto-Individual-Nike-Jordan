var lookModel = require("../models/lookModel");

function salvar(req, res) {
    var fkUsuario       = req.body.fkUsuario;
    var tentativa       = req.body.tentativa;
    var nota            = req.body.nota;
    var compatibilidade = req.body.compatibilidade;
    var categoria       = req.body.categoria;

    if (fkUsuario == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else if (tentativa == undefined) {
        res.status(400).send("Tentativa está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Nota está undefined!");
    } else if (compatibilidade == undefined) {
        res.status(400).send("Compatibilidade está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("Categoria está undefined!");
    } else {
        lookModel.salvar(fkUsuario, tentativa, nota, compatibilidade, categoria)
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
    var fkUsuario = req.params.fkUsuario;

    lookModel.buscarPorUsuario(fkUsuario)
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
