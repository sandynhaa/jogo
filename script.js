const palavras = ["javascript", "html", "css", "forca", "programacao"];
let score = 0;
let target = document.getElementById("target");
let gameArea = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    showTarget();
}

function showTarget() {
    const gameWidth = gameArea.clientWidth - 50;
    const gameHeight = gameArea.clientHeight - 50;
    const randomX = Math.floor(Math.random() * gameWidth);
    const randomY = Math.floor(Math.random() * gameHeight);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
    target.style.display = "block";

    setTimeout(hideTarget, 2000);
}

function hideTarget() {
    target.style.display = "none";

    if (score < 10) {
        showTarget();
    } else {
        endGame();
    }
}

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    hideTarget();
});

function endGame() {
    alert(`Jogo terminado! Pontuação final: ${score}`);
    startButton.disabled = false;
}
