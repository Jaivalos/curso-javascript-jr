let free = false;

const validarCliente = time => {
    let edad = prompt("Cual es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert(`Podes pasar porque sos la primer persona despues de las 2am`);
            free = true;
        }else alert(`Podes pasar pero tenes que pagar la entrada, son las ${time} horas`);
    }else alert(`No podes pasar`);
}

validarCliente(23);
validarCliente(12);
validarCliente(0.6);
validarCliente(45);
validarCliente(7);
validarCliente(2);
