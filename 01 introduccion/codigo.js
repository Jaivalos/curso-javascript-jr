
//Historia de Cofla 5

const materias = {
    fisica: [91,6,3,"Fisica"],
    matematica: [65,9,3,"Matematica"],
    rrhh: [89,3,2,"RRHH"],
    algebra: [90,8,3,"Algebra"],
    ingles: [100,7,4,"Ingles"],
    quimica: [56,9,2,"Quimica"],
    programacion: [91,9,4,"Programacion"],
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);

        if(asistencias>=90){
            console.log("%c   Asistencia en orden", "color:green");
        }else{
            console.log("%c   Falta de asistencia", "color:red");
        }
        if(promedio>=7){
            console.log("%c   Promedio en orden", "color:green");
        }else{
            console.log("%c   Falta de promedio", "color:red");
        }
        if(trabajos>=3){
            console.log("%c   Trabajos en orden", "color:green");
        }else{
            console.log("%c   Trabajos faltantes", "color:red");
        }
    }
}

aprobo();