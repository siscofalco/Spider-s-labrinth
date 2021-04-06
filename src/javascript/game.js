class Game {
    constructor(gameScreen) {
        this.gameScreen = gameScreen,
        this.mapArr = mapArr,
        this.character = null,
        this.enemies = null,
        this.canvas = null,
        this.ctx = null,
        this.runningGame = true,
        this.score = this.gameScreen.querySelector(".score .value"),
        this.scoreValue = 0,
        this.playButton = document.querySelector("#play-button"),
        this.pauseButton = document.querySelector("#pause-button")
    }

    start(){
        this.canvas = this.gameScreen.querySelector(".canvas-container canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = "5000";
        this.canvas.height = "5000";
        this.character = new Character(this.canvas);
        this.enemies = new Enemy(this.canvas);
        this.activatePauseButton();
        this.startLoop();
    }

    printCharacter(){
        this.character.CharacterPosition();
        this.character.characterDraw();
    }

    printEnemies(){
        this.enemies.enemyDraw();
    }

    printLabyrinth(ctx){
        mapArr.forEach((row, indexY) => {
            row.forEach((block, indexX)=>{
                if(block === "B"){
                    ctx.fillStyle = "black";
                } else {
                    ctx.fillStyle = "white";
                }
                ctx.fillRect(indexX * 50, indexY * 50, 50, 50);
            });
        });
    }
    
    startLoop(){
        const loop = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.printLabyrinth(this.ctx);
            this.printCharacter();
            this.printEnemies();
            this.printScore();
            if(this.runningGame !== false){
                const slowDownTime = () => {
                    window.requestAnimationFrame(loop);
                };
                setTimeout(slowDownTime, 500);
            }
        };
        window.requestAnimationFrame(loop);
    }
    
    activatePauseButton(){
        const reactivateGame = () => {
            this.runningGame = true;
            this.playButton.classList.add("hidden");
            this.startLoop();
        }
        const pauseGame = () => {
            this.runningGame = false;
            this.playButton.classList.remove("hidden");
            this.playButton.addEventListener("click", reactivateGame);
        }
        this.pauseButton.addEventListener("click", pauseGame);
        this.playButton.classList.add("hidden");
    }

    printScore(){
        this.scoreValue += 10;
        this.score.innerHTML = (`${this.scoreValue}`); 
    }
}

const mapArr = [
    ["B","B","B","B","B","B","B","B","B","B",],
    ["B","P","P","P","P","B","P","P","P","B",],
    ["B","B","P","B","P","B","P","B","P","B",],
    ["B","P","P","B","P","B","P","B","P","B",],
    ["B","P","P","B","P","B","P","B","P","B",],
    ["B","B","P","B","P","B","P","B","P","B",],
    ["B","P","P","B","P","B","P","B","P","B",],
    ["B","P","P","B","P","B","P","B","P","B",],
    ["B","B","P","B","P","P","P","B","P","B",],
    ["B","B","B","B","B","B","B","B","B","B",],
];
