var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.post("/post", function (req, res) {

    let partida = req.body;
    console.log(req.body);

    let dbConnection = req.app.locals.db;
    dbConnection.collection("partidas").insertOne(partida, function (err, datos) {

        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else if (err == null) {
            res.send(datos);

        }

    });
});
module.exports = router;