class Enemy{
    constructor(canvas, x, y){
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d"),
        this.x = x,
        this.y = y,
        this.direction = "DOWN"
    }

    enemyDraw(){
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.x * 30, this.y * 30, 30, 30);
    }

    enemyPosition(map){
        let coorX = this.x;
        let coorY = this.y;

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

            if(Math.random() < 0.1){
                const directionArray = ["UP", "DOWN", "LEFT", "RIGHT"];
                this.direction = directionArray[Math.floor(4 * Math.random())];
            }
        } else {
            const directionArray = ["UP", "DOWN", "LEFT", "RIGHT"];
            this.direction = directionArray[Math.floor(4 * Math.random())];
            this.enemyPosition(map);
        }
    }
}