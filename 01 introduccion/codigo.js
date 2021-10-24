
materias = {
        fisica: ["Perez","Pedro", "Juan", "Maria", "Lucas", "Jesus"],
        programacion: ["Martinez","Pedro", "Juan", "Maria", "Pepe", "Jesus"],
        logica: ["Martinez","Martin", "Juan", "Maria", "Lucas", "Jesus"],
        quimica: ["Perez","Pedro", "Juan", "Maria", "Jose", "Jesus"]
    };

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if(personas.length >= 2){
        document.write(`Lo siento <b> ${alumno} </b>los cupos de <b>${materia}</b> ya estan llenos`);
    }else {
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            };
        }else if(materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            };
        }else if(materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            };
        }else if(materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["logica"],
                logica: materias["logica"],
                quimica: personas
            };
        }document.write(`Felicidades ${alumno} te has inscrito en ${materia} correctamente`)
    }
}

inscribir("Juanito", "fisica");