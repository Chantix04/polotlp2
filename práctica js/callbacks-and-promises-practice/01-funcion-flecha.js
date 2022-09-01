/* Ventajas de las funciones flecha: 
* 1. No se necesita el uso de la palabra reservada function
* 2. No se necesita el uso de la palabra reservada return
* 3. No se necesita el uso de la palabra reservada this
* 4. No se necesita el uso de la palabra reservada arguments
*/

// function sumar( a, b){
//     return a + b;
// }

// Cuando el cuerpo posee una sola línea, se puede escribir de la siguiente manera:
// const sumar = (a, b) =>  a + b;
// const saludar = () =>  `Bienvenido a la clase de Javascript`;



// console.log(sumar(1, 2));
// console.log(saludar()); 

function sumar(...arguments){
    console.log(arguments)
    //return a+b;
}
const arrArgumentos = sumar(1,2,3,4,5,6,7,8,9,10);

console.log(arrArgumentos)

const saludar = (nombre)=>`Bienvenido a la clase de ${nombre}`;

