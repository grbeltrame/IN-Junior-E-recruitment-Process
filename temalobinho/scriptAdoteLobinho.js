let nome = document.querySelector('.nameInpt')
let age = document.querySelector('.personAge')
let email = document.querySelector('.inputFormsMail')
let adotar = document.querySelector('.personEmail')

//funcao para cadastrar


//funcoes para validacao dos campos
function nameValidation(nome){
    var letrasNome = nome.length

     if(letrasNome && (letrasNome > 4 && letrasNome < 60)) {
        return true
     }
     return false
}

function ageValidation(idade){
    idade = Number(idade);

    if((! isNaN(idade)) && (Number(idade) > 0) && Number(idade) < 100){
        return true
     }
     return false
}

function emailValidation(email) {
    var letras
    if(!email){
        return true
     }
     return false
}



//funcao para registrar num objeto
function registration() {
    let name = document.querySelector(".nameInpt").value;
    let age = Number(document.querySelector(".personAge").value);
    let email = document.querySelector(".personEmail").value;

    document.querySelector(".nameInpt").value = "";
    document.querySelector(".personAge").value = "";
    document.querySelector(".personEmail").value = "";
    return { 
        name: name,
        age: age,
        email: email
    }
}

//funcao para criar lobo

let btn = document.querySelector('.adoptWolf')

btn.addEventListener("click", criarLobo => {
    let url = "http://lobinhos.herokuapp.com/wolves"
    let answer = registration()

    if ((nameValidation(answer.name)) || (ageValidation(answer.age)) || (emailValidation(answer.email))) {

            let fetchBody = {
                 wolf: {
                    name: answer.name,
                    age: answer.age,
                    email: answer.email
                 }
            }
    
            let fetchConfig = {
                method: "POST",
                body: JSON.stringify(fetchBody),
                headers: {"Content-Type":"application/json"}
            }
            
            console.log(fetchBody)

            fetch(url, fetchConfig)
            .then(response => {response.json()})
                .then((response)=> { console.log(response)
            }).catch(erro =>{
                console.log("Deu erro")
            })
    } else {
        alert('Erro')
    }
})