class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerSizeW, playerSizeH, canvasSize) {
        this.ctx = ctx
        this.bulletPos = {
            x: playerPosX + playerSizeW / 2,
            y: playerPosY + playerSizeH / 2 - 10
        }
        this.bulletSize = { w: 40, h: 40 }
        this.canvasSize = canvasSize
        this.bulletImage = 'images/bubble.png'
        this.imageInstance = undefined
        
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.bulletImage 
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h)
        /* this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h) */        
        this.move()
    }

    move() {
        this.bulletPos.y -= 10
    }
}
