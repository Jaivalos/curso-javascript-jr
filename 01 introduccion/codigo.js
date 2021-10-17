//Parametros

function suma(num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write(`<br>`);
}

suma(12, 32);
suma(22, 32);

//Otro ejemplo con return

function res(num1, num2){
    let res = num1 + num2;
    return (res + `<br>`);
}

let resultado = res(20, 25);
document.write(resultado);

//Ejemplo de saludar

function saludar(nombre){
    let saludo = `Hola ${nombre} como te va?`;
    document.write(saludo);
}

saludar("Papagayo");