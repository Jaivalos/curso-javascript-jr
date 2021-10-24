
let trabajo = "240 minutos para trabajar";
let estudio = "100 minutos de estudio";
let tp = '100 minutos de trabajos practicos';
let housework = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanso";

for(i = 1; i <= 14; i ++){
    if(i == 1){
        console.group("Semana 1");
    }
    console.log("Tareas");
    console.group("Dia "+i);
    console.log(trabajo);
    console.log(estudio);
    console.log(descanso);
    console.log(tp);
    console.log(housework);
    console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.group("Semana 2")
    }
}
