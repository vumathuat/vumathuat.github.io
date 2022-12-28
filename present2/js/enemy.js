class Enemy {
    constructor(ctx, playerSizeW, canvasSizeW, canvasSizeH) {
        this.ctx = ctx
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
        this.enemySize = { w: 40, h: 90 }
        this.enemyPos = { x: undefined, y: 0 }
        this.playerSizeW = playerSizeW
        this.enemyScore = 5

        this.enemyImage = 'images/enemy_live.png'
        this.imageInstance = undefined
        this.enemyFrames = 3
        this.enemyFramesIndex = 0

        this.init()
    }

    init() {
        this.enemyPos.x = Math.floor(Math.random(this.enemyPos.x) * this.canvasSize.w - this.playerSizeW / 2) - this.enemySize.w / 2
        if (this.enemyPos.x <= 0) {
            this.enemyPos.x = this.enemyPos.x + this.enemySize.w + this.enemySize.w
        }

        this.imageInstance = new Image()
        this.imageInstance.src = this.enemyImage
    }

    draw(framesCounter) {
        /* this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h) */

        this.ctx.drawImage(this.imageInstance, this.enemyFramesIndex * (90 / this.enemyFrames), 0, 30, 100, this.enemyPos.x, this.enemyPos.y, this.enemySize.w * 2, this.enemySize.h * 3)
        this.animate(framesCounter)
        
        this.move()
    }

    animate(framesCounter) {
        if (framesCounter % 10 === 0)
            this.enemyFramesIndex += 1

        if (this.enemyFramesIndex >= this.enemyFrames)
            this.enemyFramesIndex = 0
    }

    move() {
        this.enemyPos.y += 10
    }

}