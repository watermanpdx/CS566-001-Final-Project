const dialogBox = document.getElementById('dialogBox');
const toggleButton = document.getElementById('toggleButton');

let isActive = false;

function startConversation() {
    dialogBox.innerHTML = `
        <div class="user-message">User: Hello</div>
        <div class="app-message">App: How can I help you?</div>
        <div class="user-message">User: I want to buy a stapler.</div>
        <div class="app-message">App: Sure! We have several options available.</div>
    `;
}

function stopConversation() {
    dialogBox.innerHTML = '<div class="app-message">App: Conversation ended.</div>';
}

toggleButton.addEventListener('click', function() {
    isActive = !isActive;
    if (isActive) {
        toggleButton.classList.remove('inactive');
        toggleButton.classList.add('active');
        toggleButton.innerHTML = '<i class="fas fa-microphone-slash"></i>'; // Change to microphone with line through it
        startConversation();
    } else {
        toggleButton.classList.remove('active');
        toggleButton.classList.add('inactive');
        toggleButton.innerHTML = '<i class="fas fa-microphone"></i>'; // Change back to regular microphone
        stopConversation();
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    dialogBox.innerHTML = '<div class="app-message">App: Restarting conversation...</div>';
    setTimeout(startConversation, 1000); // Simulate a brief pause before restarting
});
