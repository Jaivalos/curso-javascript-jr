
//METODOS DE CHILDS 

//Eliminar un hijo

const cont = document.querySelector(".contenedor");

const pnuevo = document.createElement('P');
pnuevo.innerHTML = "Parrafo";

pviejo = document.querySelector(".pantiguo");

cont.replaceChild(pnuevo,pviejo);

cont.removeChild(pnuevo);