/* Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.

Para isso, você precisa:

Criar um array com objetos contendo nome e idade de cada participante.
Usar o método filter() para:
Selecionar somente os participantes com 18 anos ou mais.
Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
Exibir a lista de aprovados no final. */

const participantes = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 19 },
  { nome: "Daniel", idade: 15 },
  { nome: "Marcela", idade: 25 },
];

const maioresDeIdade = participantes.filter((participantes) => {
  participantes.idade >= 18
    ? console.log(`Acesso liberado para: ${participantes.nome}`)
    : false;
  return participantes.idade >= 18;
});

const autorizados = maioresDeIdade.map((participantes) => participantes.nome);
console.log("Lista dos aprovados:", autorizados);
