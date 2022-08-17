//EJERCICIOS
//1) Pedir al usuario que ingrese
//su nombre, guardarlo en una 
//variable y usarlo para saludar
// al usuario

//let nombreUsuario = prompt('Indique su nombre')
//alert('Hola '+ nombreUsuario)

//2) Pedir al usuario que ingrese
//2 numeros y devolver las operaciones básicas
//(suma, resta, mult, div)

// let x=parseInt(prompt('Ingrese un número x'))
// let y=parseInt(prompt('Ingrese un número y'))
// document.write(`La suma de esos números es: ${x+y} <br>
// La resta de x-y es: ${x-y} <br>
// El producto de los números es ${x*y} <br>
// La división de x/y da como resultado: ${x/y}`)
// para comentar todo, usar ctrl+}

// let string = "1234"
// console.log(typeof(+string))

//Pedir al usuario que ingrese apellido y devolverle
//el apellido, todo en mayúsculas

// let apellido=prompt('Indique su apellido')
// alert(apellido.toUpperCase()) //PARA PASAR A MAYÚSCULAS

//ARRAYS
// EN JS, es una colección de datos HETEROGÉNEO

// const miArray=["nombre", 1, null, 'NOMBRE' ]
//MANIPULACIÓN DE ARRAYS
// 1 Obtener un elemento
// const miArray=["pera", "kiwi", 3, "5"]
// const fruta = miArray[1]
// console.log(miArray[1])
// console.log(miArray.length)

// MODIFICAR UN ELEMENTO DENTRO DEL ARRAY

// miArray[0]="naranja"
// console.log(miArray)

// PARA SACAR EL VALOR DE UNA PARTE DEL ARRAY Y PONERLO EN UNA VARIABLE

// let objeto = miArray[1]
// console.log(objeto)

//Acceso al ultimo elemento
// let ultimoElemento= miArray[miArray.length-1]
// console.log(ultimoElemento)
//indexOf para buscar el índice en el que se encuentra un elemento del array

// const personas=["Susana", "Serena", "Lautaro"]
// const nombre1 = "Lautaro"

// const indice = personas.indexOf("Roberto") //si el elemento no existe en el arreglo, el resultado arrojado será -1
// const indice1 = personas.indexOf(nombre1)

// personas[personas.indexOf("Lautaro")]="Rubén" //otra forma de cambiar el valor de un elemento del arreglo

// personas.push("Marcelo") //Agrega un elemento nuevo al arreglo al final del mismo
// console.log(personas) 

// personas.pop() //elimina el ultimo elemento del arreglo
// console.log(personas)
// personas.unshift("Fernando") //Agrega un elemento al arreglo al principio del arreglo, moviendo un lugar a la derecha a todos los demás
// console.log(personas)
// personas.shift() //Elimina el primer elemento del arreglo
// console.log(personas)

// personas.splice(1, 0, "Agustín") //el primer número indica el índice donde trabajará el splice, el segundo número (si es cero) indica que ese valor nuevo será agregado sin quitar otro
// console.log(personas)
// personas.splice(1, 1, "Patricia") // aquí el segundo valor es 1 porque va  a reemplazar al elemento que esté en el índice del primer número.
// console.log(personas)


//FUNCIONES
//FUNCIÓN "COMÚN"
function validarNombre (nombre){
    return `${nombre} nuevo`
}

//FUNCIÓN FLECHA
const funcion2=(nombre)=>`${nombre} nuevo`

//Hacer una funcion llamada numeros que el primer parámetro
//indique qué valor tengo que agregar, y el segundo el indice
//donde será agregado y que muestre por consola el nuevo arreglo
const arregloRandom=["Marley", "Canela", "Tora", "Askeladd"]

function agregar(i,j){
    j=prompt("indique el valor a agregar al arreglo")
    i=prompt("Indique el número del índice donde será agregado")
    arregloRandom.splice(i, 0, j)

    console.log(arregloRandom)
    console.log(arregloRandom.indexOf(j))

    return arregloRandom
}

const agregar2 =(i,j)=>{ j=prompt("Indique el valor a agregar al arreglo"); i=prompt("Indique el número del índice donde será ubicado el nuevo valor") ;arregloRandom.splice(i,0,j) ;console.log(arregloRandom); console.log(arregloRandom.indexOf(j)) ;return arregloRandom}

// 