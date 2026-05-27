var database = require("../database/config");

function cadastrar(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar
};