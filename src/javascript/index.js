let game;
let welcomeScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.children[0];
}


function createWelcomeScreen() {
    welcomeScreen = buildDom(`
        <main>
            <h1>Spider's Labyrinth</h1>
            <button id="appearance-red">Red</button>
            <button id="appearance-blue">Blue</button>
        </main>
    `);

    document.body.appendChild(welcomeScreen);

 
    const startButtons = welcomeScreen.querySelectorAll("button");

    startButtons.forEach((button)=> {
        button.addEventListener("click", startGame);
    })
}
 
function removeWelcomeScreen() {
  welcomeScreen.remove();
}

function createGameScreen() {
    gameScreen = buildDom(`
        <main class="game container">
            <header>
                <div class="level">
                    <span class="label">Level:</span>
                    <span class="value"></span>
                </div>
                <div class="score">
                    <span class="label">Score:</span>
                    <span class="value"></span>
                </div>
                <div> 
                    <button id="pause-button">Pause</button>
                    <button id="play-button">Play</button>
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
    gameScreen.remove();
}

function createGameOverScreen(score) {
    if (score === 0) {
        gameOverScreen = buildDom(`
            <main>
                <h1>GAME OVER :(</h1>
                <button>Restart</button>
            </main>
        `);
    } else {
        gameOverScreen = buildDom(`
            <main>
                <h1>YOU WIN!</h1>
                <p>Your score: <span>${score}</span></p>
                <button>Restart</button>
            </main>
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
    const appearanceId = event.target.id;
    game.start(appearanceId);
}

function endGame(score) {
    removeGameScreen();
    createGameOverScreen(score);
}

window.addEventListener("load", createWelcomeScreen);