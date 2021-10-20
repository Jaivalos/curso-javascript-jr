
class celulares{
    constructor(color,peso,rp,rc,ram){
        this.color = color;
        this.peso = peso;
        this.rp = rp;
        this.rc = rc;
        this.ram = ram;
        this.encendido = false;
    }
    
    presBoton = ()=>{
        if(this.encendido == false){
            alert(`Encendiendo...`);
            this.encendido = true;
        }else alert(`Telefono Apagado`);
    }

    reiniciar = ()=>{
        if(this.encendido == false){
            alert(`Telefono apagado`);
            this.encendido = true;
        }else alert(`Reiniciando`);
    }

    tomarFotos = () =>{
        if(this.encendido == true){
            alert(`Foto tomada en la resolucion de ${this.rc}`);
        }else{alert(`Celular apagado`);}
    }

    tomarVideo = () =>{
        if(this.encendido == true){
            alert(`Video tomado en la resolucion de ${this.rc}`);
        }else{alert(`Celular apagado`);}
    }

    mobileInfo = () =>{
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de la pantalla: <b>${this.rp}</b><br>
        Resolucion de la camara: <b>${this.rc}</b><br>
        RAM: <b>${this.ram}</b><br><br>
        `
    }
}

class celularAltaGama extends celulares {
    constructor(color,peso,rp,rc,ram,rce){
        super(color,peso,rp,rc,ram);
        this.rce = rce;
    }

    grabarVideoLento = () =>{
        if(this.encendido == true){
            alert(`Video en camara lenta tomado en la resolucion de ${this.rce}`);
        }else{alert(`Celular apagado`);}
    }

    reconocimientoFacial = () =>{
        if(this.encendido == true){
            alert(`Reconocimiento facial listo`);
        }else{alert(`Celular apagado`);}
    }

    mobileInfoHigh = () =>{
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de la pantalla: <b>${this.rp}</b><br>
        Resolucion de la camara: <b>${this.rc}</b><br>
        RAM: <b>${this.ram}</b><br>
        Resolucion camara extra: <b>${this.rce}</b><br><br>
        `
    }
}

celular1 = new celulares("Azul", "500px", "FullHD", "12mp", "16Gb");
celular2 = new celulares("Verde", "50px", "HD", "15mp", "8Gb");
celular3 = new celulares("Cafe", "504px", "FullHD", "12mp", "4Gb");

celularA1 = new celularAltaGama("cafe", "100gr", "UHD", "45mp", "32Gb", "15mp");
celularA2 = new celularAltaGama("cafe", "100gr", "UHD", "45mp", "32Gb", "15mp");

document.write(celular1.mobileInfo());
document.write(celular2.mobileInfo());
document.write(celular3.mobileInfo());

document.write(celularA1.mobileInfoHigh());
document.write(celularA2.mobileInfoHigh());