
/*Se crea una funcion para obtener la info de cada uno de los alumnos en las clases
con un valor de entrada que sera la materia que se quiere buscar*/
const obtenerInfo = (materia)=>{
    //Se crea un arreglo dinamico
    materias = {
        fisica: ["Perez","Pedro", "Juan", "Maria", "Lucas", "Jesus"],
        programacion: ["Martinez","Pedro", "Juan", "Maria", "Pepe", "Jesus"],
        logica: ["Martinez","Martin", "Juan", "Maria", "Lucas", "Jesus"],
        quimica: ["Perez","Pedro", "Juan", "Maria", "Jose", "Jesus"]
    };
    //Se consulta si el valor de entrada existe en el arreglo dinamico
    if(materias[materia] !== undefined){
        /*En la primer posicion del arreglo se selecciona la materia que se quiere mostrar
        la segunda sirve para seleccionar si se quiere mostrar el nombre de la materia o los 
        alumnos dentro de esa materia*/
        return [materias[materia],materia,materias];
    }else return materias;
}
//Se crea una funcion donde se muestren los alumnos
const mostrarInfo = (materia)=>{
    let info = obtenerInfo(materia);
    if(info !== false){
        /*El profesor es el primer elemento de cada clase, por lo que se selecciona 
        el primer elemento de ese arreglo*/
        let profesor = info[0][0];
        let alumnos = info[0];
        alumnos.shift();
        //Aca es donde se utiliza el arreglo dentro de otro arreglo
        document.write(`<br>El profesor de ${info[1]} es:<b> ${profesor} </b><br>y los alumnos son: <b style = "color: red"> ${(alumnos)}</b>`);
    };
}
//Creamos una funcion para poder ver las clases en las que estan los alumnos
const cantClases = (alumno) => {
    //Creamos nuevamente la clase informacion
    let informacion = obtenerInfo();
    //Contador de clases y clases 
    let cant = 0;
    let clasesPresentes = [];
    //Recorremos el vector de informacion
    for(info in informacion){
        /*Si imformacion en la posicion info tiene al alumno 
        que estamos buscando sumamos uno y agregamos la clase en el vector*/
        if(informacion[info].includes(alumno)){
            cant++;
            clasesPresentes.push(info);
        }
    }
    //Mostramos
    document.write(`<br>El alumno: ${alumno} esta en: ${cant}, <br> Esta cursando <b style= "color:green">${clasesPresentes}</b>`);
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

cantClases("Pedro");
cantClases("Maria");
cantClases("Juan");
cantClases("Jesus");