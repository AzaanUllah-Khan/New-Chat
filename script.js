
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// function to add a message to the chat area
function addMessage(sender, message) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('message', sender);
    const senderSpan = document.createElement('span');
    senderSpan.textContent = sender;
    const messagePara = document.createElement('p');
    messagePara.textContent = message;
    messageItem.appendChild(senderSpan);
    messageItem.appendChild(messagePara);
    messageList.appendChild(messageItem);
}

// function to generate a random bot response
function generateBotResponse(userMessage) {
    const greetings = ['Hello there!', 'Hi!', 'Hey!', 'Greetings!'];
    const questions = ['How are you?', 'What can I do for you?', 'What brings you here?', 'How may I assist you?'];
    const compliments = ['You look great today!', 'Nice outfit!', 'I like your style!', 'You have a great personality!'];
    const responses = [...greetings, ...questions, ...compliments];
    const botResponse = responses[Math.floor(Math.random() * responses.length)];
    return botResponse;
}

// function to handle sending a message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage('me', message);
        messageInput.value = '';
        // simulate bot response after a short delay
        setTimeout(() => {
            const botMessage = generateBotResponse(message);
            addMessage('Friend', botMessage);
        }, 1000);
    }
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

