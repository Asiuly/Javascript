//const addUserText = document.getElementById(`add-user`);
//adicionando o elemento com id add-user à variavel const

//podemos ver que pegamos o elemento HTML
//console.log(addUserText);

//addUserText.innerText = "Adicionar Usuário";
//alterando texto do elemento texo add-user para a string passada

//com document.querySelector("#add-user") - usa-se a # e muda algumas coisas

//const allItems = document.querySelectorAll(".items .item");
//com esse query, podemos selecionar mais de um elemento, como nesse exemplo, é uma classe
//ele vai retornar uma lista com todas as propriedades de uma lista e com todos os itens dessa classe.

//SOBRE MANIPULAÇÃO DOS ELEMENTOS DO HTML

//selecionando a classe items
const items = document.querySelector(".items");

//agora podemos manipula-la atraves da variavel que atribuimos sua seleçao
//items.remove(); //vai remover todos os 3 items

/*items.firstElementChild.remove(); = remove o primeiro item da lista items
  items.latElementChild.remove(); = remove o ULTIMO item da lista items*/

console.log(items.children); //children = uma lista com os elementos da lista items, podem ser selecionados
//por ID, como por exemplo:

items.children[0].textContent = "Item UM"; //MODIFICA TEXTO DENTRO DO PRIMEIRO ITEM DA LISTA ITEMS PARA "ITEM UM"
