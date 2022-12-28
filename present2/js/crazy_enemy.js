class CrazyEnemy {
    constructor(ctx, playerSizeW, canvasSizeW, canvasSizeH) {
        this.ctx = ctx
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
        this.crazyEnemySize = { w: 60, h: 60 }
        this.crazyEnemyPos = { x: undefined, y: 0 }
        this.playerSizeW = playerSizeW
        this.crazyEnemySpeedX = undefined
        this.crazyEnemyScore = 10
        this.randomStartX = Math.floor(Math.random() * 10)

        this.crazyEnemyImage = 'images/crazy_enemy.png'
        this.imageInstance = undefined
        this.crazyEnemyFrames = 3
        this.crazyEnemyFramesIndex = 0

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.crazyEnemyImage

        this.crazyEnemyPos.x = Math.floor(Math.random(this.crazyEnemyPos.x) * this.canvasSize.w - this.playerSizeW / 2) - this.crazyEnemySize.w / 2
        if (this.crazyEnemyPos.x <= 0) {
            this.crazyEnemyPos.x = this.crazyEnemyPos.x + this.crazyEnemySize.w + this.crazyEnemySize.w
        }

        this.crazyEnemySpeedX = Math.floor(Math.random() * 15)
        if (this.crazyEnemySpeedX < 10) {
            return this.crazyEnemySpeedX = Math.floor(Math.random() * 15)
        }
    }

    draw(framesCounter) {
        /* this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.crazyEnemyPos.x, this.crazyEnemyPos.y, this.crazyEnemySize.w, this.crazyEnemySize.h) */

        this.ctx.drawImage(this.imageInstance, this.crazyEnemyFramesIndex * (270 / this.crazyEnemyFrames), 0, 90, 100, this.crazyEnemyPos.x, this.crazyEnemyPos.y, this.crazyEnemySize.w * 2, this.crazyEnemySize.h * 3)

        this.animate(framesCounter)

        this.move()
    }

    animate(framesCounter) {
        if (framesCounter % 10 === 0)
            this.crazyEnemyFramesIndex += 1

        if (this.crazyEnemyFramesIndex >= this.crazyEnemyFrames)
            this.crazyEnemyFramesIndex = 0
    }

    move() {
        this.crazyEnemyPos.y += 5
        if (this.crazyEnemyPos.x >= this.canvasSize.w - this.crazyEnemySize.w - 50 || this.crazyEnemyPos.x < 0) {
            this.turnAround()
        }

        if (this.randomStartX < 5) {
            return this.crazyEnemyPos.x += this.crazyEnemySpeedX
        } else if (this.randomStartX >= 5) {
            return this.crazyEnemyPos.x -= this.crazyEnemySpeedX
        }
    }

    turnAround() {
        this.crazyEnemySpeedX *= -1
    }
}

