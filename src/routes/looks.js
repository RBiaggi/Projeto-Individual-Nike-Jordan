var express = require("express");
var router = express.Router();

var lookController = require("../controllers/lookController");

router.post("/salvar", function(req, res) {
    lookController.salvar(req, res);
});

router.get("/:idUsuario", function(req, res) {
    lookController.buscarPorUsuario(req, res);
});

module.exports = router;