const invitados=["Lucas","Matías","Jose","Pedro","Martina","Marcelo","Esteban","Marcela","Martin"]

console.log(invitados.length) //Punto 1

console.log(invitados[invitados.length-1]) //Punto 2

invitados.splice(invitados.indexOf("Pedro"), 1) //Punto 3

console.log(invitados)//Punto 3 (si comentamos lo de la línea 11 y 12, se puede ver con mejor claridad en la consolo que esto sirve para quitar a Pedro de la lista)

invitados.splice(invitados.length, 0, "Pedro") //Punto 3 (Esta parte sirve para agregarlo al final de la lista)
console.log(invitados)

invitados.splice(invitados.indexOf("Marcela"), 1) //Punto 4, eliminar a Marcela de la lista
console.log(invitados)

invitados.sort()
console.log(invitados)
let i=0 //inicializamos en 0 el índice para usarlo en la función
const invitadosOrden = invitados.map(function(invitadosOrden){
  
    i++

    return `${invitadosOrden} , orden: ${i}`
    
}) //con el método .map hacemos un arreglo nuevo agregándoles el orden en el que están invitadas las personas.
// en este caso, hacemos un contador i para indicar el índice del número de invitación.

console.log(invitadosOrden) //Aquí mostramos en consola el nuevo arreglo.

