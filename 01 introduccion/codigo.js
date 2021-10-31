
//.innerHTML

const cont = document.querySelector(".contenedor");
const item = document.createElement("LI");

//document.write(item);
const textNode = document.createTextNode("Esta es un item de la lista");

item.appendChild(textNode);

cont.appendChild(textNode);

console.log(cont);