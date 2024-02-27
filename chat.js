/*-----------------------global-----------------------* */
const messageButton = document.querySelector("#message-commit");
const messageInput = document.querySelector("#message-input");
const chatMessagesDiv = document.querySelector("#chat-messages");

const ListaMensagens = [];

/*----------------------functions-----------------------*/
function adicionarMensagem(apelido, mensagem) {
    const object = {
        apelido: apelido,
        mensagem: mensagem,
    };  
    ListaMensagens.push(object);
}

function createElementHtml(element) {
    return document.createElement(element);
}

function addClass(element, className) {
    element.classList.add(className);

}

function appendChildElement(parent, child) {
    parent.appendChild(child);
}

function formatarMensagens() {
    const messageDiv = createElementHtml("div");
    addClass(messageDiv, "chat-message");
    
    
    
    for (let indice = 0; indice < ListaMensagens.length; indice++){
        const messageApelidoSpan = createElementHtml("span");
        addClass( messageApelidoSpan, "chat-message-apelido");
        messageApelidoSpan.innerText = ListaMensagens[indice].apelido;


        const messageItemSpan =createElementHtml("span");
        addClass( messageItemSpan, "chat-message-item");
        messageItemSpan.innerText = ` ${ListaMensagens[indice].mensagem}`;

        const brElement = createElementHtml("br");


        appendChildElement(messageDiv, messageApelidoSpan);
        appendChildElement(messageDiv, messageItemSpan);
        appendChildElement(messageDiv, brElement);
        
    }    

    return messageDiv;
}

function atualizarHTML() {
    appendChildElement(chatMessagesDiv, formatarMensagens())

}

function commitMessageClickHandler() {
    const messageInputValue = messageInput.value.trim();
    const apelido = "Pernalongha";

    if (messageInputValue.length == 0) {
        alert("coloque uma mensagem válida");
        messageInput.value = "";
        return;
    }

    adicionarMensagem(apelido, messageInputValue);
    atualizarHTML()
    messageInput.value = "";
    
}
/*-----------------------events-----------------------* */

function runMain() {
    messageButton.addEventListener("click", commitMessageClickHandler);
} 


/*----------------------main--------------------------* */
runMain();
