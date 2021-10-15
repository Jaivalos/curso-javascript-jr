dineroCofla = prompt("Cofla, Cuanto dinero tienes?");
dineroRoberto = prompt("Roberto, Cuanto dinero tienes?");
dineroPedro = prompt("Pedro, Cuanto dinero tienes?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla, Compra el helado de agua");
    alert("Y te sobran: " + (dineroCofla - 0.6) );
}else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, Compra el helado de crema");
    alert("Y te sobran: " + (dineroCofla - 1) );
}else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, Compra el helado de heladix");
    alert("Y te sobran: " + (dineroCofla - 1.6) );
}else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, Compra el helado de heladovich");
    alert("Y te sobran: " + (dineroCofla - 1.7) );
}else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, Compra el helado de helardo");
    alert("Y te sobran: " + (dineroCofla - 1.8) );
}else if(dineroCofla >= 2.9){
    alert("Cofla, Helado supremo");
    alert("Y te sobran: " + (dineroCofla - 2.9) );
}else {alert("Cofla, Lo siento, no le alcanza para ningun helado");}

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto, Compra el helado de agua");
}else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, Compra el helado de crema");
}else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, Compra el helado de heladix");
}else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, Compra el helado de heladovich");
}else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, Compra el helado de helardo");
}else if(dineroRoberto >= 2.9){
    alert("Roberto, Helado supremo");
}else {alert("Roberto, Lo siento, no le alcanza para ningun helado");}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro, Compra el helado de agua");
}else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro, Compra el helado de crema");
}else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro, Compra el helado de heladix");
}else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, Compra el helado de heladovich");
}else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, Compra el helado de helardo");
}else if(dineroPedro >= 2.9){
    alert("Pedro, Helado supremo");
}else {alert("Pedro, Lo siento, no le alcanza para ningun helado");}