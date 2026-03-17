import { generatedPassword } from "./generatedPassword.js";
// Primeiro, vamos declarar as variaveis
const btnGerar = document.getElementById("generate");
const btnCopiar = document.getElementById("copy");

// Criamos o myPassword vazia para depois receber a senha gerada
let myPassword = "";

// Segundo, vamos criar a função do botão gerar
btnGerar.addEventListener("click", function () {
  const comprimento = document.getElementById("passwordGenerator").value;
  const letrasMaiusc = document.getElementById("maiusculas").checked;
  const letrasMinusc = document.getElementById("minusculas").checked;
  const numeros = document.getElementById("numeros").checked;
  const simbolos = document.getElementById("simbolos").checked;

  // Verifica se é numero, que não esteja vazio, e que seja maior que zero
  if (isNaN(comprimento) || !comprimento.trim() || Number(comprimento) <= 0) {
    alert("Digite número valido e maior que zero!");
    return
  }

  // Pego a senha gerada pela função
  let passwordGenerated = generatedPassword(
    comprimento,
    letrasMaiusc,
    letrasMinusc,
    numeros,
    simbolos,
  );

  // Em seguida, recebo a variavel para que possa ser transmetida na mensagem
  myPassword = passwordGenerated;

  // .value para formularios, no caso do input
  // Mostrando a senha gerada no input
  document.getElementById("passwordGenerator").value = myPassword;

  // Mostra a mensagem de sucesso
  document.getElementById("feedbackDiv").textContent =
    "Senha gerada com sucesso!";

  // Deixa visivel a div id=password
  document.getElementById("feedbackDiv").style.display = "block";
});

// Terceiro, vamos criar a função do botão copiar
btnCopiar.addEventListener("click", async function () {
  let copyPassword = myPassword;
  // Verifica se há senha gerada
  if (!copyPassword) return alert("Não há nada para ser copiado");

  // Vamos criar função copiar
  try {
    await navigator.clipboard.writeText(copyPassword);
    alert("Senha copiada com sucesso!");
  } catch {
    alert("Não foi possivel copiar a senha...");
  }

  // Esconde a div após ser clicada
  document.getElementById("feedbackDiv").style.display = "none";

  // Apaga o valor após ser copiada
  document.getElementById("passwordGenerator").value = "";
});
