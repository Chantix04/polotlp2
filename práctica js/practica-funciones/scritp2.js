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
}

console.log(obtenerPrecio(producto1))