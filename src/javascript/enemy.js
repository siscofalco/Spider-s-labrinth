class Enemy{
    constructor(canvas){
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d")
    }

    enemyDraw(){
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(60, 60, 25, 25);
    }
}