let game;
let welcomeScreen;
let gameScreen;
let gameOverScreen;

const backgroundSound = new Audio("./src/sounds/background_music.mp3");

function buildDom(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.children[0];
}


function createWelcomeScreen() {
    welcomeScreen = buildDom(`
        <div class="welcome-screen">
            <img src="./src/img/spiders_labyrinth.png" class="spiders-labyrinth-logo" id="life-image-1" />
            <div>
                <button type="button" id="easy" class="nes-btn is-success">Easy</button>
                <button type="button" id="medium" class="nes-btn is-warning">Medium</button>
                <button type="button" id="hard" class="nes-btn is-error">Hard</button>
            </div>
        </div>
    `);

    document.body.appendChild(welcomeScreen);

    const gameEasy = welcomeScreen.querySelector("#easy");
    gameEasy.addEventListener("click", startGame);

    const gameMedium = welcomeScreen.querySelector("#medium");
    gameMedium.addEventListener("click", startGame);

    const gameHard = welcomeScreen.querySelector("#hard");
    gameHard.addEventListener("click", startGame);   
}
 
function removeWelcomeScreen() {
  welcomeScreen.remove();
}

function createGameScreen() {
    backgroundSound.play();
    gameScreen = buildDom(`
        <main class="game container game-screen">
            <header>
                <div class="life">
                    <span class="label">Life:</span>
                    <img src="./src/img/life.png" class="life-image" id="life-image-1" />
                    <img src="./src/img/life.png" class="life-image" id="life-image-2" />
                    <img src="./src/img/life.png" class="life-image" id="life-image-3" />
                </div>
                <div class="score">
                    <span class="label">Score:</span>
                    <span class="value"></span>
                </div>
                <div class="button-container"> 
                    <button id="pause-button" class="nes-btn is-primary">Pause</button>
                    <button id="play-button" class="nes-btn is-primary">Play</button>
                </div>
            </header>
            <div class="canvas-container">
                <canvas></canvas>
            </div>
        </main>
    `);

    document.body.appendChild(gameScreen);
    return gameScreen; 
}

function removeGameScreen() {
    backgroundSound.pause();
    gameScreen.remove();
}

function createGameOverScreen(score) {
    if (score === 0) {
        gameOverScreen = buildDom(`
            <div class="gameover-screen">
                <h1>GAME OVER</h1>
                <button class="nes-btn is-primary">Restart</button>
            </div>
        `);
    } else {
        gameOverScreen = buildDom(`
            <div class="gameover-screen">
                <h1>YOU WIN!</h1>
                <p>Your score: <span>${score}</span></p>
                <button class="nes-btn is-primary">Restart</button>
            </div>
        `);
    }
    const button = gameOverScreen.querySelector("button");
    button.addEventListener("click", startGame)

    document.body.appendChild(gameOverScreen)
}
function removeGameOverScreen() {
    gameOverScreen.remove()
}

function startGame(event) {
    removeWelcomeScreen();
    if(gameOverScreen){
        removeGameOverScreen();
    }
    createGameScreen();

    game = new Game(gameScreen);
    game.start(event.target.id);
}

function endGame(score) {
    removeGameScreen();
    createGameOverScreen(score);
}

window.addEventListener("load", createWelcomeScreen);