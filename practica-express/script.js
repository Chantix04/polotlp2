//1 NPM INIT -Y PARA INICIAR EL PROYECTO
//2 NPM I -EXPRESS PARA INSTALAR EXPRESS

// 3 IMPORTAMOS LOS PAQUETES CON UNA VARIABLE

const express = require("express");
const app = express()

// 7 USE JSON
app.use(express.json())

app.use(require("./routes/home.routes"))
//4 EL .LISTEN SIRVE PARA ESCUCHAR AL SERVIDOR
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})
