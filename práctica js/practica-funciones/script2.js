//EJERCICIO
//CREAR UNA FUNCIÓN PARA APLICAR DESCUENTOS DEL 15%
//Y DEL 30% A PRODUCTOS VARIOS

const producto1={
    nombre: "Remera",
    precio: 3000
}
const producto2 = {
    nombre: "Jeans",
    precio: 5000
}

//1 FUNCION DECLARACIÓN

function obtenerPrecio(producto){
    const precioSinDescuento = producto.precio;
    const precioConDto= producto.precio*0.85;
    const precioSuperDto = producto.precio*0.7;

    return `Precio sin descuento: ${precioSinDescuento}, precio con descuento del 15%: ${precioConDto}, precio con descuento del 70%: ${precioSuperDto}` 
    //TAMBIEN SE PUEDE HACER UN RETURN TIPO OBJETO O RETURN TIPO ARRAY
    // return {preciosinDto,precioConDto,PrecioSuperDto}
    // return [precioSinDescuento, precioConDto, precioSuperDto] 
}



console.log(obtenerPrecio(producto1))
console.log(obtenerPrecio(producto2))

//2 FUNCION EXPRESIÓN

const obtenerPrecios = function(producto){
    const precioSinDescuento = producto.precio;
    const precioConDto= producto.precio*0.85;
    const precioSuperDto = producto.precio*0.7;

    return [precioSinDescuento,precioConDto,precioSuperDto] 
}
console.log(obtenerPrecios(producto1))
console.log(obtenerPrecios(producto2))

//3 FUNCIÓN FLECHA
// RETURN ARREGLO
// const obtenerPreciosFlecha = producto=> {
//     [producto.precio,
//     producto.precio*0.85,
//     producto.precio*0.7]
// }
//TAMBIÉN SE PUEDE USAR UN RETURN OBJETO 
const obtenerPreciosFlecha = producto=>{
    return{precioSinDescuento: producto.precio,
    precioConDto : producto.precio*0.85,
    precioSuperDto : producto.precio*0.7}
}
console.log(obtenerPreciosFlecha(producto1))
console.log(obtenerPreciosFlecha(producto2))