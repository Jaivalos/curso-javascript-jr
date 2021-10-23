//Ejemplo de calculadora por prompt

class calculadora {
    constructor(){
    }
    sumar = (num1, num2)=>{
        return num1 + num2;
    }
    resta = (num1, num2)=>{
        return num1 - num2;
    }
    mult = (num1, num2)=>{
        return num1 * num2;
    }
    div = (num1, num2)=>{
        return num1 / num2;
    }
    pot = (num1, exp)=>{
        return num1 ** exp;
    }
    r2 = (num1)=>{
        return Math.sqrt(num1);
    }
    r3 = (num1)=>{
        return Math.cbrt(num1);
    }
}

const calc = new calculadora();

alert(`Que operacion deseas realizar?`);
let operacion = prompt(`1. Suma, 2. Resta, 3. Multiplicacion, 4. Division, 5. Potencia a la x, 6. Raiz cuadrada, 7. Raiz cubica `);

if(operacion == 1){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= calc.sumar(numero1, numero2);  
    alert(`Tu resultado es: ${res}`);
}else if(operacion == 2){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= calc.resta(numero1, numero2);
    alert(`Tu resultado es: ${res}`);  
}else if(operacion == 3){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= calc.mult(numero1, numero2); 
    alert(`Tu resultado es: ${res}`); 
}else if(operacion == 4){
    let numero1 = prompt(`Ingresa el primer numero`);
    let numero2= prompt(`Ingresa el segudno numero`);
    let res= calc.div(numero1, numero2);  
    alert(`Tu resultado es: ${res}`);
}else if(operacion == 5){
    let numero1 = prompt(`Ingresa la base`);
    let numero2= prompt(`Ingresa el exponente`);
    let res= calc.pot(numero1, numero2);  
    alert(`Tu resultado es: ${res}`);
}else if(operacion == 6){
    let numero1 = prompt(`Ingresa la base`);
    let res= calc.r2(numero1);  
    alert(`Tu resultado es: ${res}`);
}else if(operacion == 7){
    let numero1 = prompt(`Ingresa la base`);
    let res= calc.r3(numero1);  
    alert(`Tu resultado es: ${res}`);
}else alert(`Numero no reconocido`);