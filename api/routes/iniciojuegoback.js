var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());



router.get("/", function (req, res) {
    
   let dbConnection = req.app.locals.db;
    dbConnection.collection('posiciones').find().toArray(function (err, datos) {
        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else {
            // console.log(datos);
            res.send(datos);
        }
    });

});

module.exports = router;