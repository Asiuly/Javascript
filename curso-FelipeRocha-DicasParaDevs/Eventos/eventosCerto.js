const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const mensagemDeErro = document.querySelector(".msg");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    mensagemDeErro.textContent = "Por favor preencha os campos";
    mensagemDeErro.classList = "error";
    return;
  }
});
