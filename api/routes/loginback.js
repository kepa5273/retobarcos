var express = require("express");
var mongodb = require("mongodb");
 var bcrypt = require("bcrypt");
var router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post("/login/post", function(req, res) {
    
    let usuario = req.body.registro;
    let password = req.body.passwordRegistro;
    let contraseniaCifrada = bcrypt.hashSync(password, 10);
    console.log("contraseña cifrada:" + contraseniaCifrada);
    let coincidencia = bcrypt.compareSync(password, contraseniaCifrada);
    console.log(coincidencia);
    let db = req.app.locals.db;
    
    if (coincidencia) {console.log('hay coincidencia');
        db.collection("login").insertOne({ username: usuario, password: contraseniaCifrada }, function(err, userUpdate) {
            console.log('conecta con la coleccion');
            // console.log(userUpdate);
            if (err !== null) {
                console.log(err);
                res.send({ mensaje: "Ha habido un error" });
            } else {
                if (userUpdate.result.n > 0) {
                    res.send({ mensaje: "Usuario creado" });
                } else {
                    res.send({ mensaje: "El usuario no se ha podido crear" });
                }
            }
        })
    }
});
router.post("/checkuser/post", function(req, res) {
    let username = req.body.login;
    let password = req.body.passwordLogin;
    let db = req.app.locals.db;
    db.collection("login")
        .find({ username: username })
        .toArray(function(err, arrayUsuario) {
            // console.log(arrayUsuario);
            if (err !== null) {
                res.send({ mensaje: "Ha habido un error", status: false });
            } else {
                if (arrayUsuario.length > 0) {
                    if (bcrypt.compareSync(password, arrayUsuario[0].password)) {
                        res.send({ mensaje: "Logueado correctamente", status: true });
                        
                    } else {
                        res.send({ mensaje: "Contraseña incorrecta", status: false });
                    }
                } else {
                    res.send({ mensaje: "El usuario no existe", status: false });
                }
            }
        });
});
module.exports = router;