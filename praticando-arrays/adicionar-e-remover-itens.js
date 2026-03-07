/* Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:

Crie um array com três tarefas iniciais.
Adicione uma nova tarefa no final da lista.
Remova a última tarefa da lista.
Exiba a lista após cada operação. */

const tarefas = ["Estudar", "Lavar roupa", "Fazer compras"];
console.log("Lista de taferas: ", tarefas);

tarefas.push("Pagar boletos");
console.log("\nLista de tarefas atualizada:", tarefas);

tarefas.pop();
console.log("\nLista após concluir a última tarefa:", tarefas);
