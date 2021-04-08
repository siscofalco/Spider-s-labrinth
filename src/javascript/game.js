const deathSound = new Audio("./src/sounds/death_sound.mp3");

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
        this.howManyLife = this.gameScreen.querySelector(".life .value"),
        this.scoreValue = 0,
        this.playButton = document.querySelector("#play-button"),
        this.pauseButton = document.querySelector("#pause-button"),
        this.life = 3,
        this.blockImg = null,
        this.trophyImg = null,
        this.floorImg = null,
        this.lifeImg = null
    }

    start(difficulty){
        this.loadImages()
        this.canvas = this.gameScreen.querySelector(".canvas-container canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = "750";
        this.canvas.height = "630";

        //To initialize the character
        this.character = new Character(this.canvas);
        this.character.setKeyListener();
        console.log(difficulty);
        if(difficulty === 'easy'){
        //To initialize the three enemies
            const firstEnemy = new Enemy(this.canvas, 4, 1);
            const secondEnemy = new Enemy(this.canvas, 1, 10);
            const thirdEnemy = new Enemy(this.canvas, 23, 10);
            this.enemies = [firstEnemy, secondEnemy, thirdEnemy];
        } else if(difficulty === 'medium'){
            const firstEnemy = new Enemy(this.canvas, 4, 1);
            const secondEnemy = new Enemy(this.canvas, 1, 10);
            const thirdEnemy = new Enemy(this.canvas, 23, 10);
            const fourthEnemy = new Enemy(this.canvas, 9, 9);
            const fifthEnemy = new Enemy(this.canvas, 15, 9);
            this.enemies = [firstEnemy, secondEnemy, thirdEnemy, fourthEnemy, fifthEnemy];
        } else {
            const firstEnemy = new Enemy(this.canvas, 4, 1);
            const secondEnemy = new Enemy(this.canvas, 1, 10);
            const thirdEnemy = new Enemy(this.canvas, 23, 10);
            const fourthEnemy = new Enemy(this.canvas, 9, 9);
            const fifthEnemy = new Enemy(this.canvas, 15, 9);
            const sixthEnemy = new Enemy(this.canvas, 15, 9);
            const seventhEnemy = new Enemy(this.canvas, 4, 19);
            const eigthEnemy = new Enemy(this.canvas, 20, 19);
            this.enemies = [firstEnemy, secondEnemy, thirdEnemy, fourthEnemy, fifthEnemy, sixthEnemy, seventhEnemy, eigthEnemy];
        }
        
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
                    this.ctx.drawImage(this.blockImg, indexX * 30, indexY * 30, 30, 30);
                } else if (block === "T") {
                    this.ctx.drawImage(this.trophyImg, indexX * 30, indexY * 30, 30, 30);
                } else {
                    this.ctx.drawImage(this.floorImg, indexX * 30, indexY * 30, 30, 30);
                }
            });
        });
    }

    loadImages(){
        this.blockImg = new Image();
        this.blockImg.src = './src/img/wall-block.png';
        this.trophyImg = new Image();
        this.trophyImg.src = './src/img/trophy.png';
        this.floorImg = new Image();
        this.floorImg.src = './src/img/floor-maze.png';
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
                        const lastLife = this.gameScreen.querySelector(`#life-image-${this.life}`);
                        lastLife.classList.add("lost-life");
                        this.life -= 1;
                        deathSound.play();
                        this.character.x = 12;
                        this.character.y = 17;
                        this.character.direction = "DOWN";
                    }
                });



                if(this.runningGame !== false){
                    const slowDownTime = () => {
                        window.requestAnimationFrame(loop);
                    };
                    setTimeout(slowDownTime, 300);
                }
            }
        };
        setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, 300);
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
    ["B"," "," "," "," "," "," "," ","B"," "," "," "," "," "," "," ","B"," "," "," "," "," "," "," ","B"], //7
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
