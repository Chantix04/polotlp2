//PRIMER PUNTO
//vamos a simular una carrera entre tres personas juan,mario y martin. 
//El orden de largada sera siempre el siguiente:
//primero juan
//mario
//martin
//el orden de llegada se determina conforme el nombre de cada uno vaya 
//apareciendo en la consola de modo que el ganador sera aquel cuyo
//nombre sera el primero en aparecer
//utilizando solamente el setTimeOut y sin alterar el orden de larga 
//escribir el codigo necesario escribir el codigo necesario
//para obtener los siguientes resultados:
//vuelta num 1 --- mario martin juan
//vuelta num 2 --- juan martin y mario
//vuelta num 3 --- martin juan y mario
//vuelta num 4 --- mario juan y martin

//VUELTA 1
// setTimeout(()=>{
    
//     console.log("Juan")

// },200)
// console.log("Mario")
// console.log("Martín")



//vUELTA 2

// setTimeout(()=>{

// })


    
// //VUELTA 3

// setTimeout(()=>{
//     console.log("Juan")
// },300)

// setTimeout(()=>{
//     console.log("Mario")
// },400)

// console.log("Martín")

//VUELTA 4

// setTimeout(()=>{
//     console.log("Juan")
// },300)
// console.log("Mario")
// setTimeout(()=>{
//     console.log("Martín")
// },200)

// PUNTO NUMERO 2

//UTILIZANDO LA API DE GITHUB (https://api.github.com) realizar las siguientes tareas:
//Obtener una lista de los repositorios públicos 
//(documentación de la API: https://api.github.com/repositories)

// const listRepos = async ()=>{
//     const repo = await fetch("https://api.github.com/repositories"); //El fetch llama la API del repositorio y el await es el que hace que la función ESPERE a que lleguen los datos recibidos de la API
    
//     return repo;
// }
// listRepos().then((response)=>console.log(response)).catch((reject)=>console.log(reject));

//Generar una función que a partir de la respuesta del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados


const listRepos = async ()=>{
    const repo = await fetch("https://api.github.com/repositories"); //El fetch llama la API del repositorio y el await es el que hace que la función ESPERE a que lleguen los datos recibidos de la API
    const jsonRespuesta = repo.json();    
    return jsonRespuesta;
}

const nombresArray = async()=>{
    const respuesta = await listRepos()
    const newArray = respuesta.map((nombre)=>nombre.owner.login);
    return newArray
}
console.log(
    nombresArray()
    .then
)