//Metodos de cadenas

//concat
cadena = `Cadena de prueba `;
cadena2 = `Cadena 2`;

resultado = cadena.concat(cadena2);
document.write(resultado + `<br>`);

//startsWith
cadena = `Cadena 2 de prueba `;
cadena2 = `Cadena 2`;

resultado = cadena.startsWith(cadena2);
document.write(resultado + `<br>`);

//endsWith
cadena = `Cadena 2 de prueba `;
cadena2 = `Cadena 2`;

resultado = cadena.endsWith(cadena2);
document.write(resultado + `<br>`);

//includes
cadena = `Cadena 2 de prueba `;
cadena2 = `de`;

resultado = cadena.includes(cadena2);
document.write(resultado + `<br>`);

//indexOf
cadena = `Cadena 2 de prueba `;
cadena2 = `de`;

resultado = cadena.indexOf(cadena2);
document.write(resultado + `<br>`);

//lastIndexOf
cadena = `Cadena 2 de prueba `;
cadena2 = `de`;

resultado = cadena.lastIndexOf(cadena2);
document.write(resultado + `<br>`);

//padStart
cadena = `abc`;
cadena2 = ``;

resultado = cadena.padStart(6, `1`);
document.write(resultado + `<br>`);

//padEnd
cadena = `abc`;
cadena2 = ``;

resultado = cadena.padEnd(6, `1`);
document.write(resultado + `<br>`);

//repeat
cadena = `abc `;
cadena2 = ``;

resultado = cadena.repeat(5);
document.write(resultado + `<br>`);