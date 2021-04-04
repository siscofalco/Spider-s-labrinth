class Game {
    constructor(gameScreen) {
        this.gameScreen = gameScreen,
        this.mapArr = mapArr,
        this.character = null;
        this.enemies = null;
        this.canvas = null;
        this.ctx = null;
    }

    start(){
        this.canvas = this.gameScreen.querySelector(".canvas-container canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = "1000";
        this.canvas.height = "1000";
        
        this.printLabyrinth(this.ctx);
        this.printCharacter();
        this.printEnemies();
    }

    printCharacter(){
        this.character = new Character(this.canvas);
        this.character.characterDraw();
    }

    printEnemies(){
        this.enemies = new Enemy(this.canvas);
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
                ctx.fillRect(indexX * 20, indexY * 20, 20, 20);
            });
        });
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
