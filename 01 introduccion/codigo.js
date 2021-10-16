
// Array asociativo

let pc = {
    nombre: "Hp ProBook",
    procesador: "Intel core I7",
    ram: "8Gb",
    espacio: "128Gb"
};

let frase = `El nombre de mi pc es: <b> ${pc["nombre"]} </b> <br>
             El procesador de mi pc es: <b> ${pc["procesador"]} </b> <br>
             La ram de mi pc es: <b> ${pc["ram"]} </b> <br>
             El espacio de mi pc es: <b> ${pc["espacio"]} </b> <br>`;

document.write(frase);
document.write(pc["nombre"]);
document.write(pc["procesador"]);
document.write(pc["ram"]);
document.write(pc["espacio"]);