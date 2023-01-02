/// Funcoes para validar se o nome é uma string, nao pode ser vazia e deve conter entre 4 e 60 caracteres)

function nameValidation(nome){
    var letrasNome = nome.length

     if(letrasNome && (letrasNome > 4 && letrasNome < 60)) {
        return true
     }
     return false
}

//Funcao para validar se o link da imagem existe

// function ImgValidation(imageUrl){
//      var img = new Image();
//      img.src = imageUrl;
//      if(img.height<=0){
//        alert ("essa url nao existe")
//      } else {
//         return true
//      }
// }

//Funcao para validar se a idade é um inteiro, nao pode ser vazio, e deve ser entre 0 e 100

function ageValidation(idade){
    idade = Number(idade);

    if((! isNaN(idade)) && (Number(idade) > 0) && Number(idade) < 100){
        return true
     }
     return false
    }


//Funcao para validar se a descricao é um string, nao pode ser vazia, e deve ter entre 10 e 255 caracteres

function descriptionValidation(descricao) {
    var letras = descricao.length
    if((!descricao) && (letras > 10 && letras < 255)) {
        return true
     }
     return false
}


//cadastro

function registration() {
    let name = document.querySelector(".nomeInpt").value;
    let age = Number(document.querySelector(".idadeInpt").value);
    let link = document.querySelector(".linkInpt").value;
    let description = document.querySelector(".loboSobreArea").value;

    document.querySelector(".nomeInpt").value = "";
    document.querySelector(".idadeInpt").value = "";
    document.querySelector(".linkInpt").value = "";
    document.querySelector(".loboSobreArea").value = "";
    return { 
        name: name,
        age: age,
        link: link,
        description: description
    }
}


const botao = document.querySelector(".sendCadastro")
botao.addEventListener("click", clique => {
    let url = "http://lobinhos.herokuapp.com/wolves"
    let answer = registration()

    if ((nameValidation(answer.name)) || (ageValidation(answer.age)) || (descriptionValidation(answer.description))) {

            let fetchBody = {
                 wolf: {
                    name: answer.name,
                    age: answer.age,
                    image_url: answer.link,
                    description: answer.description
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
