var database = require("../database/config");

function salvar(fkUsuario, tentativa, nota, compatibilidade, categoria) {
    var instrucaoSql = `
        INSERT INTO Look (fkUsuario, tentativa, nota, compatibilidade, categoria) 
        VALUES ('${fkUsuario}', '${tentativa}', '${nota}', '${compatibilidade}', '${categoria}');
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(fkUsuario) {
    var instrucaoSql = `
        SELECT idLook, tentativa, nota, compatibilidade, categoria, dtHora
        FROM Look 
        WHERE fkUsuario = '${fkUsuario}';
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    buscarPorUsuario
};