/* Você recebeu a tarefa de automatizar o painel de uma linha de empacotamento em um centro de distribuição. A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas válidas por vez. Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.

Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas. O programa deve parar o processamento assim que 5 caixas válidas forem processadas. */

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];

for (let i = 0; i <= caixas.length - 2; i++) {
  if (caixas[i] >= 0) {
    console.log("Caixa processada: ", caixas[i]);
  } else if (caixas[i] < 0) {
    console.log("Caixa danificada, ignorada.");
  }
}

console.log("Limite de caixas atingido!");
