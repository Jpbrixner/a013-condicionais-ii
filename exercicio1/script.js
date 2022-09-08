//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
//Faça isso:
//1. Utilizando ifs aninhados

const num = +prompt("Digite um numero");

if (num % 2 === 0) {
  if (num % 3 === 0) {
    console.log("o numero é divisivel por 2 e 3");
  } else {
    console.log("o numero é divisivel por 2 e nao por 3");
  }
} else if (num % 3 === 0) {
  console.log("o numero é divisivel por 3 e não por 2");
} else {
  console.log("o numero não é dividido por 2 e 3");
}

//2. Utilizando um operador lógico para unir duas operações relacionais

if (num % 2 === 0 || num % 3 === 0) {
  console.log("o numero é divisivel por 2 ou 3");
} else {
  console.log("Não é divisivel por 2 ou3");
}
