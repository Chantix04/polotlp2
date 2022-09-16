const ctrlHome = {}

ctrlHome.getHome = (req,res)=>{
    res.send({
       message: "<h1>Hola gente</h1>"
    })
}
ctrlHome.getUser = (req, res)=>{
    res.send({
        nombre: "Gabriel",
        apellido: "Montellano"
    })
}
ctrlHome.postHome = (req,res)=>{
    res.send({
        message: "<h1>Hola desde POST</h1>"
    })
}
ctrlHome.putHome = (req,res)=>{
    res.send({
        message: "<h1>Hola desde PUT</h1>"
    })
}
ctrlHome.deleteHome = (req,res)=>{
    res.send({
        message: "<h1>Hola desde DELETE</h1>"
    })
}

module.exports = ctrlHome;