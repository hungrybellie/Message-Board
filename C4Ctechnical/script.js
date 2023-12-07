let messages = [];

const textInput = document.getElementById('message');
const messageArea = document.getElementById('content');

function addMessage() {
    if (textInput.value === '' || textInput.value.length >= 128) {
        alert("Your message must not be empty or over 128 words long.");
    } else {
        let messageCard = document.createElement("SPAN");
        messageCard.innerHTML = textInput.value;
        messageArea.appendChild(messageCard);
    }
    textInput.value = "";
    saveMessages();
}

function saveMessages() {
    localStorage.setItem("persistMessages", messageArea.innerHTML);
}

 function showMessages() {
    messageArea.innerHTML = localStorage.getItem("persistMessages");
 }

 showMessages();

