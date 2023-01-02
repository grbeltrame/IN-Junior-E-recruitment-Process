var arrNotas = []
var media = 0

function calcMedia(){
    let soma = 0;
    for(i of arrNotas){
        soma = soma + parseFloat(i) ;
    }
    media = soma / (arrNotas.length);

    return media.toFixed(2)
}

function addMedia() {
    document.getElementById("resultTxt").innerHTML = "A média é: " + calcMedia();
}

function adicionar() {
    var nota = document.getElementById("gradesInpt").value;
    var notas = document.getElementById("acmlNotas").innerHTML;
    if(!isNaN(nota) && nota >= 0 && nota <= 10){
        arrNotas.push(nota);
        notas =  notas +" A nota "+ arrNotas.length + " foi " +  nota + "\n"
        document.getElementById("acmlNotas").innerHTML = notas;
        document.getElementById("gradesInpt").value = "";
    }else{
        alert("A nota digitada é inválida, por favor, insira uma nota valida")
    }
}
