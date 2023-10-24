//Numeros
//criando uma lista heterogenea
const names = ["Luisa", "Eu", 15, true];

//atribuindo o booleano da lista (posicao 3 do vetor)
const booleanoDaLista = names[3];

//colocando um valor na ultima posição do array
names.push("Pedro");

//colocando um valor na primeira posição de um array
names.unshift(20);

//retira o ultimo elemento da lisata, nesse caso pedro
names.pop();

//modificando a posição 1 de Luisa para Julia
names[1] = "Julia";

//imprimindo Array completo
console.log(names);
//Consts nao podem ter seu nome modificado, mas em caso de listas, seu elementos podem ser modificados

//retorna o indice do valor indicado no vetor antes do ".", nesse caso 2
names.indexOf("Eu");

//quantos elementos a lista possui
names.length;

//retorna true se a variavel for um array e falso se nao for
Array.isArray(names);

//maps recebe uma função criada por nós e aplica essa função em todos os elementos do array, retornando um array igual ao antigo mas com todos os elementos com a função aplicada
//const array modificado = names.map(função(names))

//filter cria uma lista apenas com os elementos da lista existente que se aplicam no filtro citqado por vc
const idades = [2, 4, 7, 3, 98];
const listaFiltrada = idades.filter(function (idades) {
  return idades % 2 === 0;
});

console.log(listaFiltrada); //resultado: 2, 4, 98;
//lista filtrada vai ser uma lista que tem apenas os elementos de idades que são pares.
