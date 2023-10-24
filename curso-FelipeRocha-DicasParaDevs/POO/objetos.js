//criei um objeto chamado person mesmo que sem instanciar nenhuma classe, basicamente
//é uma struct com nome person
const person = {
  primeiroNome: "Luisa",
  segundoNome: "Cristina",
  idade: "18",
  hobbies: ["Programar", "Jogar", "Ler"],
};

/*const primeiroNome = person.primeiroNome;
const segundoNome = person.segundoNome;
const idade = person.idade;
const hobbies = person.hobbies;
*/ // faz a mesma coisa que o de baixo

//destrcuction = atribuir diretamente variaveis de fora com variaveis do objeto com o mesmo nome!
const { primeiroNome, segundoNome, age: idade, hobbies } = person;

//caso queira uma variavel de fora com o nome diferente da do objeto receba o valor da do objeto, faça como fiz em idade

console.log(hobbies[1]);

//também podemos criar elementos dentro do objeto fora do escopo da declaração dele
person.cachorro = "Gamora";

console.log(
  person
); /*{primeiroNome: 'Luisa', segundoNome: 'Cristina', idade: '18', hobbies: Array(3), cachorro: 'Gamora'}*/

//também podemos criar um objeto que contém objetos dentro dele, observe:
const gamora = {
  nome: "gamorinha",
  idade: "5",
  filhote1: {
    nome: "jax",
    idade: "1",
  },
};

console.log(gamora.filhote1.idade); // resultado: 1, acessamos a idade do filhote1 da gamora;

//no dia a dia, vai ser muito comum um array de objetos em javascript, pois é uma funcionalidade extremamente util
const arrayObjetos = [
  {
    id: 1,
    descricao: "estudar programação",
  },
  {
    id: 2,
    descricao: "fazer comida",
  },
  {
    id: 3,
    descricao: "treinar",
  },
];
//note que nem precisei nomear meus objetos, eles estão indicados pelo indice do meu array

console.log(arrayObjetos[2].descricao); //"treinar", que é a descrição do objeto que está no indice 2 do meu array
