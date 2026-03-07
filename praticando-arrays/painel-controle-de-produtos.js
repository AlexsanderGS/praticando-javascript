/* Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.

Você precisa:

Mostrar todos os produtos (nome, preço, quantidade).
Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
Calcular os totais de venda de cada produto.
Descobrir o mais lucrativo. */

const produtos = [
  { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
  { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
  { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
  { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

console.log("Relatório de produtos vendidos: \n");

for (const produto of produtos) {
  console.log(
    `Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`,
  );
}
console.log("\nProdutos com alto volume de vendas (> 100 unidades):");
const maioresVendas = produtos.filter((p) => p.quantidadeVendida > 100);
for (const produto of maioresVendas) {
  console.log(produto.nome);
}

let somaTotalPorProduto = 0;

console.log("\nTotal de vendas por produto: ");
for (const p of produtos) {
  somaTotalPorProduto = p.preco * p.quantidadeVendida;
  console.log(`${p.nome}: R$ `, somaTotalPorProduto);
}

let produtoMaisLucrativo = null;
let maiorLucro = 0;

for (const p of produtos) {
  const faturamento = p.preco * p.quantidadeVendida;

  if (faturamento > maiorLucro) {
    maiorLucro = faturamento;
    produtoMaisLucrativo = p;
  }
}

console.log("\nProduto mais lucrativo:");
console.log(`${produtoMaisLucrativo.nome} com R$ ${maiorLucro} em vendas.`);
