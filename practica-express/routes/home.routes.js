const router = require("express").Router();

const {
    getHome, 
    getUser,
    postHome, 
    putHome, 
    deleteHome
} = require("../controllers/home.controllers")

// 5 PETICION GET, POST, PUT, DELETE
// PARA INICIAR NODEMON EN EL ARCHIVO SCRIPT.JS USAMOS NPX NODEMON SCRIPT.JS
//req.body para pedir lo que estamos haciendo en postman
//console.log(req.body)

router.get("/", getHome)
router.get("/user", getUser)
router.post("/user", postHome)
router.put("/user", putHome)
router.delete("/user", deleteHome)

module.exports = router;