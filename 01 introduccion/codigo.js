//Ejemplo de funcion flecha

/* function saludar(nombre){
    let saludo = `Hola ${nombre} como te va?`;
    document.write(saludo);
} */

// Es mucho mejor utilizar las funciones flecha, ya que es algo mas utilizado, este es el modelo normal:

const saludar = (nombre)=>{
    let saludo = `Hola ${nombre} como te va?`;
    document.write(saludo);
}

saludar("Papagayo");