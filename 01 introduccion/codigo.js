//Metodos de cadenas parte 2

//split
cadena = `Cadena, de, prueba `;
cadena2 = `hOLA MUNDO`;

resultado = cadena.split(`,`);
document.write(resultado + `<br>`);
document.write(resultado[0] + `<br>`);
document.write(resultado[1] + `<br>`);
document.write(resultado[2] + `<br>`);

//substring
cadena = `ABCDESx`;
cadena2 = `hOLA MUNDO`;

resultado = cadena.substring(0,2);
document.write(resultado + `<br>`);
resultado = cadena.substring(4,6);
document.write(resultado + `<br>`);

//toLowerCase
cadena = `ABCDESx`;
cadena2 = `hOLA MUNDO`;

resultado = cadena.toLowerCase();
document.write(resultado + `<br>`);

//toUpperCase
cadena = `ABCccSx`;
cadena2 = `hOLA MUNDO`;

resultado = cadena.toUpperCase();
document.write(resultado + `<br>`);

//toString
cadena = 50*8;
cadena2 = `hOLA MUNDO`;

resultado = cadena.toString();
document.write(resultado + 4 + `<br>`);

//trim, ademas existe trimStart y trimEnd. Elimina los espacios dependiendo de lo que le digamos. 
cadena = "Tengo sueno";
cadena2 = `hOLA MUNDO`;

resultado = cadena.trim();
document.write(resultado);
resultado = cadena.length;
document.write(` - ` + resultado + `<br>`);