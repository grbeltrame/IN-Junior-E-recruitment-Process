// Funcao para escolher lobo na api
let loboOne = Math.floor(Math.random() * 100)
let loboTwo = Math.floor(Math.random() * 100)

function putWolfOnThePage(objeto) {
    //lobo um
    document.querySelector(".wolfOneImg").src = objeto[loboOne].image_url;
    
    document.querySelector(".wolfOneTitle").innerText = objeto[loboOne].name
    
    document.querySelector(".wolfOneAge").innerText = `Idade: ${objeto[loboOne].age}`
    
    document.querySelector(".wolfOneTxt").innerText = objeto[loboOne].description
    
    //lobo dois
    document.querySelector(".wolfTwoImg").src = objeto[loboTwo].image_url;
    
    document.querySelector(".wolfTwoTitle").innerText = objeto[loboTwo].name
    
    document.querySelector(".wolfTwoAge").innerText = `Idade: ${objeto[loboTwo].age}`
    
    document.querySelector(".wolfTwoTxt").innerText = objeto[loboTwo].description
}

const urlWolves = "http://lobinhos.herokuapp.com/wolves"

fetch(urlWolves)
    .then(Response => { Response.json()
        .then(listOfWolves => { putWolfOnThePage(listOfWolves); })
        .catch(erro => {console.log(erro)})}
    )
    .catch(erro => { console.log(erro) })
