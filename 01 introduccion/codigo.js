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
    //Metodo estatico
    static ladrar = ()=>{
        alert(`GUAU!!`);
    }
}

//Llamamos al metodo directamten desde la clase
Perro.ladrar();

let perro = new Perro(`Perro`, `2`, `cafe`, `boxer`);
let gato = new Animal(`Gato`, `2`, `negro`);
let jirafa = new Animal(`Jirafa`, `23`, `Amarillo`);

// No se puede hacer esto con uno static perro.ladrar();
perro.verinfo();
gato.verinfo();
jirafa.verinfo();

/*
document.write(perro.info + `<br>`);
document.write(gato.info + `<br>`);
document.write(jirafa.info + `<br>`);
*/