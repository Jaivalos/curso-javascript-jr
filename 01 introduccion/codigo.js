
const cont = document.querySelector(".contenedor");

//Obtener el primer hijo 
let primHijo = cont.firstChild;

//Obtener el ultimo hijo 
let ultHijo = cont.lastChild;

//Obtener el primer elemento hijo 
 primHijo = cont.firstElementChild;

//Obtener el ultimo elemento hijo 
 ultHijo = cont.lastElementChild;

 // LISTA DE LOS HIJOS 
let nodeList = cont.childNodes;

//Recorrer los nodos
nodeList.forEach(hijo => console.log(hijo));

// lISTA DE LOS OBJETOS HTML 
let element = cont.children;

//Recorrer los nodos del children
for (const hijo of element) {
    console.log(hijo);
}