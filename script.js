document.getElementById("confirmBtn").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("hidden");
});

var backgroundMusic = document.getElementById("background-music");
var playPauseBtn = document.getElementById("playPauseBtn");

function playPauseMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.textContent = "Pausar Música";
        playPauseBtn.classList.remove("paused");
        playPauseBtn.classList.add("playing");
    } else {
        backgroundMusic.pause();
        playPauseBtn.textContent = "Reproducir Música";
        playPauseBtn.classList.remove("playing");
        playPauseBtn.classList.add("paused");
    }
}

playPauseBtn.addEventListener("click", playPauseMusic);