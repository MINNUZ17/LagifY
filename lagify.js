// Select buttons and message div
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const messageDiv = document.getElementById("message");

// Load the glitch audio
const glitchAudio = new Audio("glitchfreeze.wav");

// Function to show message
function showMessage(text) {
    messageDiv.textContent = text;
    setTimeout(() => {
        messageDiv.textContent = "";
    }, 3000); // message disappears after 3 seconds
}

// Start Lagify
startBtn.addEventListener("click", () => {
    glitchAudio.play();
    showMessage("Your network connection is unstable!"); // on-screen message
    startBtn.disabled = true; // prevent double clicks
});

// Stop Lagify
stopBtn.addEventListener("click", () => {
    glitchAudio.pause();
    glitchAudio.currentTime = 0;
    showMessage("Lagify stopped!");
    startBtn.disabled = false; // enable start button again
});
