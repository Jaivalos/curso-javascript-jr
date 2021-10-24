//Metodos de repeticion de array

<<<<<<< HEAD
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
=======
//filter()

let numeros = ["Uno","Dos","Tres","Cuatro","Cinco"];

res = numeros.filter(numero => numero.length > 4);
document.write(res + "<br>")

//Es un ciclo que obtendra cada uno de los elementos del array

//forEach()

let numeros2 = ["Uno","Dos","Tres","Cuatro","Cinco"];

numeros2.filter(numero => document.write(numero + "<br>"));

//Es un ciclo que obtendra cada uno de los elementos del array
>>>>>>> refs/remotes/origin/main
