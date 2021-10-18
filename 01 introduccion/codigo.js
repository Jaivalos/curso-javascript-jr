
const sumar = (num1, num2)=>{
    return num1 + num2;
}
const resta = (num1, num2)=>{
    return num1 - num2;
}
const mult = (num1, num2)=>{
    return num1 * num2;
}
const div = (num1, num2)=>{
    return num1 / num2;
}

alert(`Que operacion deseas realizar?`);
let operacion = prompt(`1. Suma, 2. Resta, 3. Multiplicacion, 4. Division`);

if(operacion == 1){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= sumar(numero1, numero2);  
    alert(`Tu resultado es: ${res}`);
}else if(operacion == 2){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= resta(numero1, numero2);
    alert(`Tu resultado es: ${res}`);  
}else if(operacion == 3){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= mult(numero1, numero2); 
    alert(`Tu resultado es: ${res}`); 
}else if(operacion == 4){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= div(numero1, numero2);  
    alert(`Tu resultado es: ${res}`);
}else alert(`Numero no reconocido`);