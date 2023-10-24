//quando o usuário interage com o site de alguma forma, como clicar em um botão, isso é um evento
const submitButton = document.querySelector("#submit-button");

//adicionando um escutador de evento, primeiro parametro: qual evento? click
//segundo parametro: oq fazer? execute a função que loga clicked
submitButton.addEventListener("click", function (e) {
  e.preventDefault(); //tirando o default de recarregar a pagina da função clicar no botao
  console.log("clicked");
});

//pegando input de uma caixa de texto
const nameInput = document.querySelector("#name"); //selecionando a caixa de texto
const nameValue = nameInput.value; //value=valor submetido
