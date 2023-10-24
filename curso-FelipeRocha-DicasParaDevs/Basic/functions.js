//criando função
/*observe, não há necessidade de especificar se a função vai te dar retorno ou não, apenas o javascript te diz isso*/
function soma(a, b = 10) {
  console.log(a + b);
}
//nessa função, estou dizendo que quando chamar a função, caso a pessoa não passe o valor de b, ele será igual a 10

//imprimir o valor de 5+3, com o console log da função
soma(5, 3);

//atribuindo o valor da soma feita dentro do log da função à uma variavel???? sim, é possivel
const valorSoma = soma(3);

console.log(valorSoma);

//arrow function, pode dar return sem a necessidade dessa palavra chave e não necessita de chavinha para só uma linha de código

const somaArrow = (a, b) /*parametros*/ => a + b; //retorno
