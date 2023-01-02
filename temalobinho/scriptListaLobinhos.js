let url = "http://lobinhos.herokuapp.com/wolves/"
fetch(url)
.then(response => response.json())
.then(wolves => wolves.forEach(wolf => {
loadWolf(wolf)}))
.catch(error => console.warn(error))

let urlAdopted = "http://lobinhos.herokuapp.com/wolves/adopted"
fetch(urlAdopted)
.then(response => response.json())
.then(wolves => wolves.forEach(wolf => {
loadAdoptedWolf(wolf)
})).catch(error => console.warn(error))


function redirectToWolf(id) {
    console.log(window.location.pathname)
    window.location.href = "/indexShowLobinho.html?id=" + id
}

function loadWolf(wolf) {
    let container = document.createElement('div')
    container.classList.add("wolfAdoption")
    container.id = `${wolf.id}`
    container.innerHTML= `  <img class="wolfImg" src="${wolf.image_url}" alt="Lobo Exemplo 1">
                            <div class="wolfAdoptionInfo">
                                <div class="wolfHeader">
                                    <div class="titleButtonContainer">
                                        <h4 class="wolfTitle">${wolf.name}</h4>
                                        <button onclick="redirectToWolf(${wolf.id})" class="btnWolf" type="button">Adotar</button >
                                    </div>
                                    <p class="wolfAge">${wolf.age}</p>
                                </div>
                                <p class="wolfTxt">${wolf.description}</p>   
                            </div>

    ` //identar
    let adoptionContainer = document.querySelector(".adoptionContainer")
    adoptionContainer.appendChild(container)
}

function loadAdoptedWolf(wolf) {
    let container = document.createElement('div')
    container.classList.add("wolfAdopted")
    container.id = `${wolf.id}`
    container.innerHTML= `  <img class="wolfImg" src="${wolf.image_url}" alt="Lobo Exemplo 1">
                            <div class="wolfAdoptedInfo">
                            <div class="wolfHeader">
                                <div class="titleButtonContainer">
                                    <h4 class="wolfTitle">${wolf.name}</h4>
                                    <button class="btnWolf" type="button">Adotado</button>
                                </div>
                                <p class="wolfAge">${wolf.age}</p>
                            </div>
                            <p class="wolfTxt">${wolf.description}</p>   
                        </div>
    
    ` //identar
    let adoptedContainer = document.querySelector(".adoptedContainer")
    adoptedContainer.appendChild(container)
    }


//se a caixa tiver marcada vai ver lobos adotados, se nao, lobos disponiveis para adocao

let checkbox = document.querySelector(".checkbox-Wolfs")
let adopted = document.querySelector('.adoptedContainer')
let forAdoption = document.querySelector('.adoptionContainer')


checkbox.addEventListener("change", function() {
    console.log("qlqr coisa")
    adopted.toggleAttribute('hidden')
    forAdoption.toggleAttribute('hidden')

})