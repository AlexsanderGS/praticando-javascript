/* Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior. */

const totalDias = 10;

let soma = 0;

for (let i = 1; i <= 10; i++) {
  soma = soma + i;
}

console.log("Total economizado em 10 dias: R$", soma.toFixed(2));
