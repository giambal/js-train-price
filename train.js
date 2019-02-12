var kilometri = prompt("quanti kilometri devi percorrere?");
var eta= prompt("qual'è la tua età?");
var prezzoUnitario=0.21;
var prezzoTot= prezzoUnitario*kilometri;
var scontoMinori= (prezzoTot*20)/100;
var scontoAnziani=(prezzoTot*40)/100;


if (eta < 18){
  prezzoTot=prezzoTot-scontoMinori;
  alert("il prezzo è di: " + prezzoTot + " euro");
}else if (eta > 65) {
  prezzoTot=prezzoTot-scontoAnziani;
  alert("il prezzo è di: " + prezzoTot + " euro");
}else {
  alert("il prezzo è di: " + prezzoTot);
}
