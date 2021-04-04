class Character{
    constructor(canvas){
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d")
    }

    characterDraw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(20, 20, 25, 25);
    }
}