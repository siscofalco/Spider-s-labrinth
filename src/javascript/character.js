class Character{
    constructor(canvas){
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d"),
        this.x = 20;
        this.y = 20;
    }

    CharacterPosition(){
        this.x += 20;
        this.y += 5;
    }

    characterDraw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, 25, 25);
    }
}
