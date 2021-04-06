class Character{
    constructor(canvas){
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d"),
        this.x = 12;
        this.y = 17;
        this.direction = "DOWN";
    }

    characterPosition(map, score){
        let coorX = this.x;
        let coorY = this.y;

        if(this.x === 12 && this.y === 3){
            endGame(score);
        }

        if(this.direction === "UP"){
            coorY += -1;
        } else if(this.direction === "DOWN"){
            coorY += 1;
        } else if(this.direction === "LEFT"){
            coorX += -1; 
        } else if(this.direction === "RIGHT"){
            coorX += 1;
        }
    
        if(map[coorY][coorX] !== "B") {
            this.x = coorX;
            this.y = coorY;
        } 
    }

    characterDraw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x * 30, this.y * 30, 30, 30);
    }

    setKeyListener() {
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowUp"){
                this.direction = "UP";
            } else if(event.key === "ArrowDown"){
                this.direction = "DOWN";
            } else if(event.key === "ArrowLeft"){
                this.direction = "LEFT";
            } else if(event.key === "ArrowRight"){
                this.direction = "RIGHT";
            }
        });
    }
}


