/* Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

Se o status for "pendente", exibe: "Pagamento pendente".
Se o status for "aprovado", exibe: "Pagamento aprovado".
Se o status for "recusado", exibe: "Pagamento recusado".
Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento. */

const status = "recusado";

switch (status) {
  case "aprovado":
    console.log("Status da compra: Pagamento aprovado.");
    break;
  case "pendente":
    console.log("Status da compra: Pagamento pendente.");
    break;
  case "recusado":
    console.log("Status da compra: Pagamento recusado.");
    break;
  default:
    console.log("Status da compra: Inválido!");
    break;
}
