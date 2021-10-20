// Clases

class animal{
    constructor(especie, edad, color){
        //Atributos
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.info = `Soy ${this.especie}, tengo ${this.edad} anos y soy de color ${this.color}`;
    }
    //Metodo
    verinfo = () => {
        document.write(this.info + `<br>`);
    }
}

let perro = new animal(`Perro`, `2`, `cafe`);
let gato = new animal(`Gato`, `2`, `negro`);
let jirafa = new animal(`Jirafa`, `23`, `Amarillo`);

perro.verinfo();
gato.verinfo();
jirafa.verinfo();

/*
document.write(perro.info + `<br>`);
document.write(gato.info + `<br>`);
document.write(jirafa.info + `<br>`);
*/