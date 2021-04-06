class Game {
    constructor(gameScreen) {
        this.gameScreen = gameScreen,
        this.mapArr = mapArr,
        this.character = null,
        this.enemies = [],
        this.canvas = null,
        this.ctx = null,
        this.runningGame = true,
        this.score = this.gameScreen.querySelector(".score .value"),
        this.scoreValue = 0,
        this.playButton = document.querySelector("#play-button"),
        this.pauseButton = document.querySelector("#pause-button")
        this.life = 3;
    }

    start(){
        this.canvas = this.gameScreen.querySelector(".canvas-container canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = "1000";
        this.canvas.height = "1000";

        //To initialize the character
        this.character = new Character(this.canvas);
        this.character.setKeyListener();

        //To initialize the three enemies
        const firstEnemy = new Enemy(this.canvas, 4, 1);
        const secondEnemy = new Enemy(this.canvas, 1, 10);
        const thirdEnemy = new Enemy(this.canvas, 23, 10);
        this.enemies = [firstEnemy, secondEnemy, thirdEnemy];
        
        this.activatePauseButton();
        this.printLabyrinth(this.ctx);
        this.character.characterDraw();
        this.startLoop();
    }

    printCharacter(){
        this.character.characterPosition(this.mapArr, this.scoreValue);
        this.character.characterDraw();
    }

    printEnemies(){
        this.enemies.forEach((enemy) => {
            enemy.enemyPosition(this.mapArr);
            enemy.enemyDraw();
        });
    }

    printLabyrinth(ctx){
        mapArr.forEach((row, indexY) => {
            row.forEach((block, indexX)=>{
                if(block === "B"){
                    ctx.fillStyle = "black";
                } else if (block === "T") {
                    ctx.fillStyle = "gold";
                } else {
                    ctx.fillStyle = "white";
                }
                ctx.fillRect(indexX * 30, indexY * 30, 30, 30);
            });
        });
    }
    
    startLoop(){
        const loop = () => {
            if(this.life <= 0){
                endGame(0);
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.printLabyrinth(this.ctx);
                this.printCharacter();
                this.printEnemies();
                this.printScore();

                this.enemies.forEach((enemy) => {
                    if((this.character.x === enemy.x && this.character.y === enemy.y) ||
                        (this.character.x + 1 === enemy.x && this.character.y === enemy.y) ||
                        (this.character.x - 1 === enemy.x && this.character.y === enemy.y) ||
                        (this.character.x === enemy.x && this.character.y + 1 === enemy.y) ||
                        (this.character.x === enemy.x && this.character.y - 1 === enemy.y)
                    ){
                        this.life -= 1;
                    }
                });

                if(this.runningGame !== false){
                    const slowDownTime = () => {
                        window.requestAnimationFrame(loop);
                    };
                    setTimeout(slowDownTime, 500);
                }
            }
        };
        setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, 500);
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
//    0                   5                  10       M           15                  20             24
    ["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B"], //0
    ["B","B","B","B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","B","B","B","B"], //1
    ["B","B","B","B"," "," "," "," ","B","B","B"," "," "," ","B","B","B"," "," "," "," ","B","B","B","B"], //2
    ["B","B","B","B"," ","B","B"," "," "," ","B"," ","T"," ","B"," "," "," ","B","B"," ","B","B","B","B"], //3
    ["B"," "," "," "," "," ","B","B","B"," ","B"," "," "," ","B"," ","B","B","B"," "," "," "," "," ","B"], //4
    ["B"," ","B","B","B"," ","B"," "," "," ","B","B","B","B","B"," "," "," ","B"," ","B","B","B"," ","B"], //5
    ["B"," "," "," ","B"," ","B"," ","B","B","B"," "," "," ","B","B","B"," ","B"," ","B"," "," "," ","B"], //6
    ["B"," ","B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","B"," ","B"], //7
    ["B","B"," "," "," ","B","B"," ","B"," "," ","B"," ","B"," "," ","B"," ","B","B"," "," "," ","B","B"], //8
    ["B","B"," ","B"," "," "," "," ","B"," ","B","B"," ","B","B"," ","B"," "," "," "," ","B"," ","B","B"], //9
    ["B"," "," ","B"," "," ","B","B","B"," "," "," "," "," "," "," ","B","B","B"," "," ","B"," "," ","B"], //10
    ["B"," ","B","B","B"," "," "," "," "," ","B","B"," ","B","B"," "," "," "," "," ","B","B","B"," ","B"], //11
    ["B"," ","B","B","B"," ","B","B"," "," "," ","B"," ","B"," "," "," ","B","B"," ","B","B","B"," ","B"], //12
    ["B"," "," "," "," "," ","B"," "," "," "," "," "," "," "," "," "," "," ","B"," "," "," "," "," ","B"], //13
    ["B"," ","B","B","B"," ","B"," ","B","B","B"," ","B"," ","B","B","B"," ","B"," ","B","B","B"," ","B"], //14
    ["B"," ","B","B","B"," ","B"," "," "," ","B","B","B","B","B"," "," "," ","B"," ","B","B","B"," ","B"], //15
    ["B"," "," "," "," "," ","B","B","B"," ","B"," "," "," ","B"," ","B","B","B"," "," "," "," "," ","B"], //16
    ["B","B","B","B"," ","B","B"," "," "," ","B"," "," "," ","B"," "," "," ","B","B"," ","B","B","B","B"], //17
    ["B","B","B","B"," ","B","B"," ","B","B","B"," "," "," ","B","B","B"," ","B","B"," ","B","B","B","B"], //18
    ["B","B","B","B"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","B","B","B","B"], //19
    ["B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B"], //20
//    0                   5                  10        M           15                  20             24
];
