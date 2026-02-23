/* Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.
Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido. */

const idade = 17;

if (idade >= 18) {
  console.log("Maior de idade! Acesso ao evento permitido!");
} else {
  console.log("Menor de idade! Acesso ao evento não permitido!");
}
