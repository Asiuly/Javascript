const soma = 1 + 1;
console.log("oii");
//condicionais
//3 === (compara valor e tipo de dado)
//2 == (compara valor  apenas)

if (soma === "2") {
  //false
  console.log("soma é 2 false");
}

if (soma == "2") {
  //true
  console.log("soma é 2 true");
}

//operador ternário
let numero;

//versao original
if (soma === 2) {
  numero = 2;
} else {
  numero = 4;
}

//versao ternario
numero = sum === 2 ? 2 : 4;

//numero é igual a 2? (sim) 2 : (nao) 4;

//SWITCHH

const car = "Mercedes";

switch (car) {
  case "Mercedes":
    console.log("Mercedes lindo");
    break;
  case "Ferrari":
    console.log("ferrari é lindo)");
    break;
  case "Tesla":
    console.log("tesla é tecnologico em");
    break;
}
