//Reescreva os códigos do arquivo script.js utilizando o if ternário.

//código a ser reescrito

/*if (nome === "José") {
  console.log("Oi, Zé!");
} else {
  console.log("Olá, " + nome);
}

if (idade >= 18) {
  console.log("pode tirar carteira de motorista!");
} else {
  console.log("Ainda não pode tirar carteira de motorista");
} */

//resposta:
const nome = String(prompt("Qual é o seu nome?")).toLowerCase();
const idade = +prompt("Qual é a sua idade?");

console.log(nome === "josé" ? "Oi, Zé!" : "Olá," + nome);

console.log(
  idade >= 18
    ? "pode tirar carteira de motorista!"
    : "Ainda não pode tirar carteira de motorista"
);
