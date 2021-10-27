
/* El dom es todo lo relacionado con la construccion de nuestra pagina web, 
es la forma en la que creamos y construimos nuestra pagina*/

  //Metodos de seleccion de elementos

  //getElementById
  let parrafo = document.getElementById("parrafo");
  document.write(parrafo + "<br>");

  //getElementByTagName
  parrafo = document.getElementsByTagName("p");
  document.write(parrafo + "<br>");

  //querySelector
  parrafo = document.querySelector("#parrafo");
  document.write(parrafo + "<br>");