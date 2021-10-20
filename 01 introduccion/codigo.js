// Clases

class Animal{
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

//Herencia
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    ladrar = ()=>{
        alert(`GUAU!!`);
    }
}

let perro = new Perro(`Perro`, `2`, `cafe`, `boxer`);
let gato = new Animal(`Gato`, `2`, `negro`);
let jirafa = new Animal(`Jirafa`, `23`, `Amarillo`);

perro.ladrar();
perro.verinfo();
gato.verinfo();
jirafa.verinfo();

/*
document.write(perro.info + `<br>`);
document.write(gato.info + `<br>`);
document.write(jirafa.info + `<br>`);
*/