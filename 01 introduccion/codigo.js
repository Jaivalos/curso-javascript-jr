//Metodos transformadores de array

//pop
nombres = [`Pedro`, `Maria`, `Juan`];
resultad = nombres.pop();
document.write(resultad + `<br>`);
document.write(nombres + `<br>`);

//shift
nombres = [`Pedro`, `Maria`, `Juan`];
resultad = nombres.shift();
document.write(resultad + `<br>`);
document.write(nombres + `<br>`);

//push
nombres = [`Pedro`, `Maria`, `Juan`];
resultad = nombres.push(`Juancito`);
document.write(resultad + `<br>`);
document.write(nombres + `<br>`);

//reverse
nombres = [`Pedro`, `Maria`, `Juan`];
document.write(nombres + `<br>`);
resultad = nombres.reverse();
document.write(resultad + `<br>`);

//unshift
nombres = [`Pedro`, `Maria`, `Juan`];
resultad = nombres.unshift(1,2,"tercero");
document.write(resultad + `<br>`);
document.write(nombres + `<br>`);

//unshift
nombres = [6,4,6,7,4,2,5,23,45,12,235,233,512345,4];
document.write(nombres + `<br>`);
resultad = nombres.sort();
document.write(resultad + `<br>`);

//splice
nombres = [6,4,6,7,4,2,5,23,45,12,235,233,512345,4];
document.write(nombres + `<br>`);
resultad = nombres.splice(3,4);
document.write(nombres + `<br>`);
resultad = nombres.splice(1,2,"mamerto");
document.write(nombres + `<br>`);
