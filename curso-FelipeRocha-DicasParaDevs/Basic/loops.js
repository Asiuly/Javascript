//for igual ao de outras linguagens
for (let i = 0; i < 10; index++) {
  console.log(index);
}

//for em conjunto com listass
const cars = ["Ferrari", "Tesla", "Mercedes"];

//percorrendo os elementos da lista
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//para cada item((nomeado carro por mim nesse loop)) da lista cars, imprima o item carro
for (let carro of cars) {
  console.log(carro);
}

let meuIndex = 0;

//normal igual ao de outras linguagens
while (meuIndex < 10) {
  console.log("meu index é menor que 10");
  meuIndex++;
}

//FOR IN, pode lidar com apenas propriedades de um objeto
const pessoinha = {
  nome: "victor",
  idade: 21,
};
// name e age são propriedades do objeto pessoinha, podemos acessar apenas o conteudo da variavel nome em pessoinha com o for in

for (property in person) {
  console.log(pessoinha[property]);
}
