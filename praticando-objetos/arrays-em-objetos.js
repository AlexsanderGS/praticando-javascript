/* Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

Crie um objeto receita com as propriedades: 'nome', 'ingredientes' (array com pelo menos 5 itens) e 'tempoPreparo'.
Acesse o índice 2 da lista que está dentro do objeto.
Exiba no console a frase: "Ingrediente complementar: [ingrediente]". */

const receita = {
  nome: "Strogonoff",
  tempoPreparo: "1 hora",
  ingredientes: [
    "Creme de leite",
    "Ketchup",
    "Mostarda",
    "Carne",
    "Extrato de tomate",
  ],
};

console.log("Ingrediente complementar: ", receita.ingredientes[2]);
