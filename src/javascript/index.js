let game;
let welcomeScreen;
let gameScreen;
let gameOverScreen;

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
    //tempDiv lo creamos para tener un elemento HTML (div) sobre el que transformar
    //nuestro string (htmlString) a formato HTML usando innerHTML
    //los strings que contengan el HTML deben tener UN SOLO ELEMENTO PADRE
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    //console.log(“tempDiv.children”, tempDiv.children)
    return tempDiv.children[0];
}

// -- splash screen
function createWelcomeScreen() {
    //para un correcto tabulado del string, tabular de la línea 2 hasta el final
    welcomeScreen = buildDom(`
        <main>
            <h1>Spider's Labyrinth</h1>
            <button id="appearance-red">Red</button>
            <button id="appearance-blue">Blue</button>
        </main>
    `);
    //Una vez creado el elemento HTML con la función buildDom, cargamos ese HTML en la página principal
    document.body.appendChild(welcomeScreen);

    //seleccionamos el botón que hemos creado y le creamos un eventListener para después crear el jugo
    const startButtons = welcomeScreen.querySelectorAll("button");

    startButtons.forEach((button)=> {
        button.addEventListener("click", startGame);
    })
}
 
function removeWelcomeScreen() {
  // remove() is the DOM method that removes the Node from the page
  welcomeScreen.remove();
  //console.log(welcomeScreen); //The value remains the same, but the code has been removed from the DOM.
}

// -- game screen
function createGameScreen() {
    //para un correcto tabulado del string, tabular de la línea 2 hasta el final
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
                </div>
            </header>
            <div class="canvas-container">
                <canvas></canvas>
            </div>
        </main>
    `);

    document.body.appendChild(gameScreen);
    return gameScreen; //this we will explain later
}

function removeGameScreen() {
    gameScreen.remove();
}

// -- game over screen
function createGameOverScreen(score) {
    gameOverScreen = buildDom(`
        <main>
            <h1>GAME OVER</h1>
            <p>Your score: <span>${score}</span> </p>
            <button>Restart</button>
        </main>
    `);
    const button = gameOverScreen.querySelector("button");
    button.addEventListener("click", startGame)

    document.body.appendChild(gameOverScreen)
}
function removeGameOverScreen() {
    gameOverScreen.remove()
}

// -- Setting the game state - start or game over
function startGame(event) {
    removeWelcomeScreen();
    if(gameOverScreen){
        removeGameOverScreen();
    }
    createGameScreen();

    game = new Game(gameScreen);
    game.gameScreen = gameScreen;
    const appearanceId = event.target.id;
    game.start(appearanceId);
}

function endGame(score) {
    removeGameScreen();
    createGameOverScreen(score);
}

window.addEventListener("load", createWelcomeScreen);