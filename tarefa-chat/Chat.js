// função edita o conteudo do mensagem(edita a mensagem no novo input, apaga a div contendo o novo input e recria a div com os botoes excluir e editar )
function editMensagem(elemento) {
    let novoTxt = elemento.parentElement.children[0]
    let areaNewTxt = elemento.parentElement.parentElement.children[0]
    let novaMsg = elemento.parentElement.parentElement
    
    areaNewTxt.value = novoTxt.value
    
    elemento.parentElement.remove()
    let divArrButtons = createButtons()

    divArrButtons[0].append(divArrButtons[1])
    divArrButtons[0].append(divArrButtons[2])
    novaMsg.append(divArrButtons[0])

}

// função que cria espaço para editar a mensagem apos ter clicado no botao editar(exclui os botoes editar e excluir e cria uma nova div contendo o input e o botao enviar )
function editar(elemento) { 
    let allButtons = elemento.parentElement.parentElement
    allButtons.children[1].remove()
  
    let divEdit = document.createElement('div')
    divEdit.classList.add('msgEdit')

    let areaWrite = document.createElement( 'textarea')
    areaWrite.classList.add('txtEdit')

    let buttonSendEdit = document.createElement('button')
    buttonSendEdit.classList.add('enviarEdit')
    buttonSendEdit.type ="button"
    buttonSendEdit.innerText = "Enviar"
    buttonSendEdit.setAttribute("onclick", 'editMensagem(this)')

    divEdit.append (areaWrite)
    divEdit.append(buttonSendEdit)
    allButtons.append(divEdit)

}

// funçao que exclui a mensagem solicitada(apaga toda a div contendo a mensagem e os botoes)
function excluir(elemento) {
     elemento.parentElement.parentElement.remove()
}

//  função que cria a div  que contem os botoes editar e excluir
function createButtons() {
    
    let divButtons = document.createElement('div')
    divButtons.classList.add('buttons')

    let buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit')
    buttonEdit.innerText = "Editar"
    buttonEdit.type = "button"
    buttonEdit.setAttribute("onclick", 'editar(this)')

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add("exclui")
    buttonDelete.innerText = "Excluir"
    buttonDelete.type = "button"
    buttonDelete.setAttribute("onclick", 'excluir(this)')

    return [divButtons , buttonEdit, buttonDelete]

}

// funçao que adiciona a mensagem a tela (contem a mensagem e os botoes)
function addMsg() {
    let historico = document.querySelector('.newMsg')

    let msgContainer = document.createElement('div')
    msgContainer.classList.add('mensagem');
     
    let areaTxt = document.createElement('textarea')
    areaTxt.classList.add('msg')

    let divArrButtons = createButtons()
    

    let nMsg = document.getElementById("msgEnvio");
    areaTxt.innerText = nMsg.value 
    historico.append(msgContainer)
    msgContainer.append(areaTxt)
    msgContainer.append(divArrButtons[0])
    divArrButtons[0].append(divArrButtons[1])
    divArrButtons[0].append(divArrButtons[2])
  
    nMsg.value= ''
    
}


