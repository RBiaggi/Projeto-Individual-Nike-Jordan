var database = require("../database/config");

function salvar(idUsuario, estilo, nota, compatibilidade) {
    var instrucaoSql = `
        INSERT INTO looks (id_usuario, estilo, nota, compatibilidade) 
        VALUES ('${idUsuario}', '${estilo}', '${nota}', '${compatibilidade}');
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT estilo, nota, compatibilidade, criado_em 
        FROM looks 
        WHERE id_usuario = '${idUsuario}';
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvar,
    buscarPorUsuario
};