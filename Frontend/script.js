async function chatbot(input) {
  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    return data.reply || "Sorry, I didn't get a response.";
  } catch (error) {
    console.error('Error:', error);
    return "Sorry, there was a problem connecting to the server.";
  }
}

// Show greeting once on page load
window.onload = () => {
  displayBotMessage("Hello! I'm Jarvis, your chatbot. How can I help you today?");
};



// Display user message
function displayUserMessage(message) {
  const chat = document.getElementById("chat");
  const userMessage = `<div class="message user">
    <div class="avatar" style="background-image: url('avatar.jpg');"></div>
    <div class="text">${message}</div>
  </div>`;
  chat.innerHTML += userMessage;
  chat.scrollTop = chat.scrollHeight;
}

// Display bot message
function displayBotMessage(message) {
  const chat = document.getElementById("chat");
  const botMessage = `<div class="message bot">
    <div class="avatar" style="background-image: url('bot.jpg');"></div>  
    <div class="text">${message}</div>
  </div>`;
  chat.innerHTML += botMessage;
  chat.scrollTop = chat.scrollHeight;
}

// Handle send message
function sendMessage() {
  const input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    const output = chatbot(input);
    setTimeout(() => displayBotMessage(output), 1000);
    document.getElementById("input").value = "";
  }
}

// Event listeners
document.getElementById("button").addEventListener("click", sendMessage);
document.getElementById("input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
