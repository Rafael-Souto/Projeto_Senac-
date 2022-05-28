  /*Esse é o projeto da disciplina Algoritimo e Programação 1, para criar um algoritimo que será um sistema de boletim acadêmico do aluno, onde. O aluno escolherá a disciplina cuja média quer verificar (caso não haja disciplina cadastrada, o aluno pode inserir uma disciplina. Vamos limitar a um total de cinco disciplinas cadastradas).
O aluno poderá inserir suas notas (quantas ele quiser) ou simplesmente verificar sua média (para isso, o sistema deverá ter as notas desse aluno previamente inseridas).
O sistema vai calcular a média ponderada das notas inseridas (para isso, o sistema deve perguntar o peso de cada nota no momento da inserção).
O sistema deve informar se o aluno está aprovado ou reprovado (a média para aprovação será 7,0 ou mais).
Se o aluno estiver aprovado, o sistema o parabeniza e pergunta se ele quer verificar outra média.
Se o aluno estiver reprovado, o sistema informa que ele deve fazer uma prova de exame.*/

//Declaração de variáveis
var materia = [ ];
var nome, nota1, nota2, nota3, calculo_n1, calculo_n2, calculo_n3, peso, media, res = 's';

  nome = prompt ("Nome do aluno: ");
    alert (" ")

// Estrutura de repetição para até 5 matérias e cálculo da média
for (i=0; i < 5 && res == 's'; i++){
    alert ("CÁLCULO DE MÉDIA\n");
  materia[i] = prompt ("Digite a " + (i+1) + "° matéria");
    alert (" ")
  nota1 = parseInt (prompt ("Digite a " + (1) + "° nota: "));
  peso = prompt ("Qual o peso da nota 1, 20%, 30% ou 50%? ");
  calculo_n1 = (nota1 * peso) / 100
    alert ("Nota 1 vale: " + calculo_n1);
  nota2 = parseInt (prompt ("Digite a " + (2) + "° nota: "));
  peso = prompt ("Qual o peso da nota 2, 20%, 30% ou 50%? ");
  calculo_n2 = (nota2 * peso) / 100
    alert ("Nota 2 vale: " + calculo_n2);
  nota3 = parseInt (prompt ("Digite a " + (3) + "° nota: "));
  peso = prompt ("Qual o peso da nota 3, 20%, 30% ou 50%? ");
  calculo_n3 = (nota3 * peso) / 100
    alert ("Nota 3 vale: " + calculo_n3);
  media = calculo_n1 + calculo_n2 + calculo_n3
    alert ("Média: " + media.toFixed(1));
    alert (" ")

//Estrutura que dis se o aluno foi aprovado ou terá que fazer uma prova de recuperação e pergunta se ele quer consultar uma nova matéria 
   if (media >= 7) {
      alert ("Parabéns, você foi aprovado.\nDeseja consultar a média de outra matéria? ");
    } else {
      alert ("Você não atingiu a nota mínima de aprovação \ne deverá fazer uma prova de recuperação. \nDeseja consultar a média de outra matéria?"); 
   }
  res = prompt ("Responda s para sim e n para não: ");
    if (res == 's'){
      console.clear()
  } else {
      console.clear()
      alert ("Obrigado! ");
  } 
}