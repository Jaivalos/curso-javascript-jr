//Metodos accesores de array

//join
nombres = [`Pedro`, `Maria`, `Juan`];
document.write(nombres + `<br>`)

let res = nombres.join(` <br> Element: `); //Convierte en una cadena de texto
document.write(`Element: ` + res + `<br>`);

//slice
nombres = [`Pedro`, `Maria`, `Juan`];
document.write(nombres + `<br>`)

res = nombres.slice(0,2); //Convierte en una cadena de texto
document.write(`Elements: ` + res + `<br>`);

//Los metdos vistos en cadena funcionan igual en los arrays
