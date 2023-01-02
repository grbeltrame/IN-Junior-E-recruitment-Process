// let btnExcluir = document.querySelector(".deleteWolf")
// let btnAdotar = document.querySelector(".adoptWolf")

//PEGA O ID DO LOBO DA PAGINA LISTALOBINHOS QUANDO CLICAR NO BOTAO ADOTAR
let urlId = new URLSearchParams(window.location.search).get('id')
console.log(urlId)

// btnExcluir.addEventListener("click", function() {
//     lobosDelete(id)
//     console.log("cliquei")
// })

function deleteWolf(id) {
    let urlDelete = "http://lobinhos.herokuapp.com/wolves/"
    let fetchConfig = {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    }
    fetch(urlDelete + urlId, fetchConfig)
      .catch(error => console.warn(error))
}


// btnAdotar.addEventListener("click", function() {
//     //nao sei o que fazer aqui
// })

//funcao para redirecionar para a pagina de adotar lobinho
function redirectToAdoptWolf(id) {
    console.log(window.location.pathname)
    window.location.href = "/indexAdoteLobinho.html?id=" + id
}

//funcao para buscar lobo pelo id
// function lobosId(id) {
//     let url = "http://lobinhos.herokuapp.com/wolves/"
//     fetch(url + id)
//       .catch(error => console.warn(error))
// }

//FALTA MUDAR O INNERHTML DA IMG TITLE E TXT DA SHOWLOBINHO
let url = "http://lobinhos.herokuapp.com/wolves/"
fetch(url + urlId)
.then(response => response.json())
.then(wolves =>loadWolf(wolf))
.catch(error => console.warn(error))

function loadWolf(wolf) {
    let container = document.createElement('div')
    container.classList.add("containerShowLobo")
    container.id = `${wolf.id}`
    container.innerHTML= `<h4 class="wolfName">${wolf.name}</h4>
                        <div class="wolfInfo">
                            <div class="wolfInteract">
                                <img class="wolfImg" src="${wolf.image_url}" alt="Lobo Para Adotar">
                                <div class="wolfButtons">
                                    <button onclick="redirectToAdoptWolf(${wolf.id})" class="adoptWolf" type="button">ADOTAR</button>
                                    <button onclick="deleteWolf(${wolf.id})" class="deleteWolf" type="button">EXCLUIR</button>
                                </div>
                            </div>
                            <p class="wolfTxt">${wolf.description}</p>

                        </div>`
    // let adoptionContainer = document.querySelector(".adoptionContainer")
    // adoptionContainer.appendChild(container)
}

