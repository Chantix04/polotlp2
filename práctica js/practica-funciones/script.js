//FUNCIONES

//1 FUNCIÓN DECLARACIÓN

function suma(num1,num2,num3=20){
    return num1+num2+num3
}
suma(5,3,6) //Ese tercer  parámetro (en este caso el 6) cambiará el valor del num3 a 6 en lugar de 20

//2) FUNCIÓN EXPRESIÓN ANÓNIMA

const suma = function(num1,num2){
    return num1+num2
}

//3 FUNCIÓN FLECHA (ARROW FUNCTION)

const resta = (num1,num2)=>{
    return num1-num2
}
//TAMBIÉN SE PUEDE HACER DE LA SIGUIENTE FORMA CUANDO EL RETORNO SE HACE EN UNA SOLA LINEA
const suma2 = (num1,num2)=> num1+num2 
//ESTE RETURN ES IMPLÍCITO Y SÓLO FUNCIONA CON LA FUNCIÓN FLECHA

//No se le pone nombre a la función
//sino que se usa directamente el formato
// () => {}

