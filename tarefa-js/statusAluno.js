let arrNotas = [6,3,9] // cria array de notas
media = 0;
soma = 0;
function calculaMedia (){
    for(i = 0; i < 3 ; i++){
        soma = soma + arrNotas[i];  // calcula soma das notas
    }
    media = soma / 3 ; // calcula media 
    return media 
}
var mediaAluno = calculaMedia() // atribui resultado da função a uma variavel
statusAluno = mediaAluno >= 6 ? 'Aprovado' : 'Reprovado' // define status do aluno
console.log(statusAluno)