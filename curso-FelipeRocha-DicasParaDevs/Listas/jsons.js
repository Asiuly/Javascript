/*front-end e back-ends nao conseguem ttransitar dados entre si com arquvios comuns, eles precisam utilizar
um tipo de arquivo chamado JSON para se comunicar*/

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
]; //array que usamos no outro arquivo

const arrayObjetosJSON = JSON.stringify(arrayObjetos);
/*pronto, essa const vai ter o nosso array em forma de JSON, observe no log*/
console.log(arrayObjetosJSON);
//essa parte json, nao funciona mais como array, e sim como string

//podemos reverter um json em lista usando o comando
const arrayObjetosARRAYDENOVO = JSON.parse(arrayObjetosJSON);
