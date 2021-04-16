var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.post("/post", function (req, res) {
    
    let barcostablero = req.body;
    console.log(req.body);

  let dbConnection = req.app.locals.db;
    dbConnection.collection("posiciones").insertOne(barcostablero, function (err, datos) {

        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else if (err == null) {
            res.send(datos);
            
        } 
            
    });
});
module.exports = router;
       
            
            
