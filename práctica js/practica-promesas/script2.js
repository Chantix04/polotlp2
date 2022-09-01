//PROMESAS
// function pagoConTarjeta(precio){
//     const limite = 10000;

//     //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
//     for (let index = 0; index <=10000; index++) {
        
//         console.log("Conectando...");
    
//     }
//     if (precio <= limite) console.log("Compra aprobada")
//     console.log("Compra rechazada")
    
// }
// const pago = 5000;
// console.log(pagoConTarjeta(pago))

//PARA SUBIR O BAJAR UN BLOQUE DE CODIGO ALT Y FLECHAS ARRIBA O ABAJO
//SHIFT Y PARENTESIS/CORCHETE/COMILLAS/LLAVES PARA METER TODO UN BLOQUE DENTRO DE ESO


// SEGUNDO CASO
// function pagoConTarjeta(precio){
//     const limite = 10000;

//     //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
//     console.log("conectando....")
//     setTimeout(()=>{
        
//         if (precio <= limite) console.log("Compra aprobada")
//             else console.log("Compra rechazada")
//         //DENTRO DEL SETTIMEOUT EL ELSE ES FUNDAMENTAL
//     },2000)
// }
// const pago = 5000;
// console.log(pagoConTarjeta(pago))


// USO DE PROMESAS
// 3 ESTADOS: PENDIENTE, RESUELTO, RECHAZADO

// const pagoConTarjeta = (precio)=> new Promise((resolve, reject)=>{
//         const limite = 10000;
//             //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
//             console.log("conectando....")
//                 if (precio <= limite) resolve("Compra aprobada")
//                     else reject("Compra rechazada")
//             //DENTRO DEL SETTIMEOUT EL ELSE ES FUNDAMENTAL
        
//     })

// const pago=25000;
// console.log(pagoConTarjeta(pago))

// const pagoConTarjeta = (precio,estaConectado)=> new Promise((resolve, reject)=>{
//         //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
        
//         if(!estaConectado) return;
        
//         const limite = 10000;

//         console.log("conectando....")
//             if (precio <= limite) resolve("Compra aprobada")
//                 else reject("Compra rechazada")
//         //DENTRO DEL SETTIMEOUT EL ELSE ES FUNDAMENTAL
    
// })

// const pago=5000;
// console.log(pagoConTarjeta(pago,true))


const pagoConTarjeta = (precio,estaConectado)=> new Promise((resolve, reject)=>{
    //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
    
    console.log("conectando....")
    
    if(!estaConectado) return;
    
    const limite = 10000;
    setTimeout(() => {

            if (precio <= limite) resolve("Compra aprobada")
                else reject("Compra rechazada")
        //DENTRO DEL SETTIMEOUT EL ELSE ES FUNDAMENTAL
        
    }, 1000);

})

const pago=15000;

//.CATCH ES PARA EL CASO DE ERROR Y .THEN ES PARA EL CASO "VALIDADO"
console.log(pagoConTarjeta(pago,true).then((respuesta)=>{
    console.log(respuesta)
}).catch((err)=>{
    console.log(err)
}))
console.log("otra tarea")