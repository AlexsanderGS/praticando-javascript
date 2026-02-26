/* Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

Até 5 km: frete fixo de R$ 5
De 5.1 km até 20 km: R$ 0,50 por quilômetro
Acima de 20 km: frete fixo de R$ 20
Seu desafio é escolher o tipo de função mais adequado para resolver este problema. */

let valorFrete = 0;
function calcularFrete(quilometros) {
  if (quilometros <= 5) {
    valorFrete = 5;
    console.log(
      `Valor do frete por km (${quilometros}km): R$`,
      valorFrete.toFixed(2),
    );
  } else if (quilometros > 5 && quilometros <= 20) {
    valorFrete = 0.5 * quilometros;
    console.log(
      `Valor do frete por km (${quilometros}km): R$`,
      valorFrete.toFixed(2),
    );
  } else if (quilometros > 20) {
    valorFrete = 20;
    console.log(
      `Valor do frete por km (${quilometros}km): R$`,
      valorFrete.toFixed(2),
    );
  }
  return valorFrete;
}

calcularFrete(3);
calcularFrete(6);
calcularFrete(25);
