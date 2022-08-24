// console.log("Me despierto")
// console.log("Me cepillo los dientes")
// console.log("Prendo la cafetera")
// // for(let tiempo=120;tiempo>=0;tiempo--){
// //     console.log(tiempo)
// //     if(tiempo===0){
// //         console.log("el café está listo")
// //     }
// // }
// setTimeout(()=>{    //El setTimeout NO es de JavaScript
//     console.log("El café está listo")
//     console.log("Desayuno")
// },1000000)
// console.log("Me ducho")
// console.log("Voy al IPF")

//EJEMPLO 2, CASO A

// console.log("Hugo"); console.log("Teresa"); console.log("Fernando")
//CASO B
// setTimeout(()=>{
//     console.log("Teresa")
// },1000);
// console.log("Hugo");
// console.log("Fernando");

//Caso C

// setTimeout(()=>{
//     console.log("Teresa")
// },1000);
// for(let index=0;index<=300;index++){
//     console.log(index)
//     if(index===300) console.log("Fernando")
// }
// console.log("Hugo");


//Ejercicio 3. Primero
// function primero(){
    
//     setTimeout(()=>{console.log("Primero")},2000)
// }
// function segundo(){
//     console.log("Segundo")
// } //Si hacemos estas dos funciones, la función "Primero", irá segunda porque tiene el web api del setTimeout

// console.log(primero())
// console.log(segundo())

// primero(fn){
    
//     setTimeout(()=>{console.log("Primero")
//     fn()
        
// },2000)
// } //Principio de programación funcional.
// function segundo(){
//     console.log("Segundo")
// }
// console.log(primero(segundo))

//Ahora pasamos estas funciones a función flecha
// En este caso, no podemos pasar estas dos funciones a función flecha porque al no tener nombres, no van a interactuar entre sí
// (fn)=>{
//     setTimeout(()=>{console.log("Primero")
// },2000)
// }
// Void = que no retorna nada
// const miArray=["Hugo", "Gabriel", "Keila"]
// miArray.forEach((nombre, index)=>{
//     console.log(nombre,": ",index)
// })
// const result = miArray.filter(word=>console.log(word.length>4))
// console.log(result)

// //OBJETOS
// const objetoEjemplo = new Object()
// const objeto2 = {
//     nombre: "Teresa",
//     edad:25,
//     domicilio:{
//         real:"dom1",
//         legal:"dom2",
//         "tercer domicilio":"dom3"
//     }
// }
//PARA AGREGAR O MODIFICAR PROPIEDADES DEL OBJETO
// objeto2.apellido="González"
// console.log(objeto2)
// objeto2.apellido="Díaz"
// //LEER UNA PROPIEDAD
// console.log(objeto2["domicilio"].legal)
// console.log(objeto2)
// objeto2["domicilio"].legal
// console.log(objeto2)

// //ELIMINAR UNA PROPIEDAD
// delete objeto2.edad
// console.log(objeto2)

// //Acceder al tercer domicilio

// console.log(objeto2.domicilio["tercer domicilio"])
// //PARA ACCEDER A UNA PROPIEDAD CUYA CLAVE ESTÁ ESCRITA CON COMILLAS SI O SI DEBEMOS UTILIZAR LA NOTACION DE CORCHETES

// console.log("edad" in objeto2) //VERIFICAMOS SI EXISTE O NO ESTA PROPIEDAD EN EL OBJETO, DEVOLVERA TRUE O FALSE
// console.log("nombre" in objeto2)

/* CREAR UN OBJETO VACÍO
AGREGAR LA PROPIEDAD NAME CON EL VALOR JOHN
AGREGAR LA PROPIEDAD SURNAME CON EL VALOR SMITH.
CAMBIA EL VALOR DE NAME A PETER 
REMUEVE LA PROPIEDAD NAME DEL OBJETO 
*/

/* const user = {}
user.name="John"
console.log(user)
user.surname="Smith"
console.log(user)
user.name="Peter"
console.log(user)
delete user.name 
console.log(user)
 */
// //FOREACH 
// const objeto3={
//     name:"chanti",
//     sufijo:"04",
//     cuentas:["chantix04","chantisacer","chantileague07"]
// }
// objeto3.forEach(() => {
    
// });
//forEach no se puede usar con objetos, tenemos que transformar el objeto en array para eso

// const obj1 = {
//     prop1:"string",
//     prop2:2,
//     prop3:[1,2,3,"string"]
// }
// console.log(obj1)
// obj1.prop3[2]="Nuevo valor"
// console.log(obj1)
// for (key in obj1) {
//     console.log(key)
// }

// let prodAlgodon ={
//     pirane:420,
//     laishi:100,
//     ibarreta:250,
//     "Palo Santo":120
// }
// //ESCRIBIR EL CODIGO PARA SUMAR TODAS LAS CANTIDADES Y ALMACENA EL RESULTADO
// //EN LA VARIABLE SUM
// let sum=0;
// for(key in prodAlgodon){
//     parseInt(sum=sum+prodAlgodon[key])
// }
// console.log(sum)