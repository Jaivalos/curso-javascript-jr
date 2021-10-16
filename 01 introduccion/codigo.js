// Ciclo for in

let animales = ["gato", "perro", "mosca"];

for(let animal in animales){
    document.write(animal + "<br>");
}

for(animal of animales){
    document.write(animal + "<br>");
}