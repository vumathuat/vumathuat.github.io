class Player {
    constructor(ctx, canvasSizeW, canvasSizeH) {
        this.ctx = ctx
        this.playerSize = { w: 50, h: 90 }
        this.playerPos = {
            x: canvasSizeW / 2 - this.playerSize.w / 2,
            y: canvasSizeH - this.playerSize.h - 30
        }
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
        this.bullets = []
        this.lives = 3
        //this.playerBackgroundColor = 'black'

        this.playerImage = 'images/squarepantsback.png'
        this.imageInstance = undefined
        this.playerFrames = 6
        this.playerFramesIndex = 0

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.playerImage
    }

    draw(framesCounter) {
        this.bullets.forEach(bullet => bullet.draw())
        this.clearBullets()
        /* this.ctx.fillStyle = this.playerBackgroundColor
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h) */
        this.ctx.drawImage(this.imageInstance, this.playerFramesIndex * (224 / this.playerFrames), 0, 37, 100, this.playerPos.x, this.playerPos.y, this.playerSize.w * 2, this.playerSize.h * 3)
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 10 === 0)
            this.playerFramesIndex += 1

        if (this.playerFramesIndex >= this.playerFrames)
            this.playerFramesIndex = 0
    }

    moveLeft() {
        if (this.playerPos.x <= 0) this.playerPos.x = 0
        else this.playerPos.x -= 70
    }

    moveRight() {
        if (this.playerPos.x >= this.canvasSize.w - this.playerSize.w)
            this.playerPos.x = this.canvasSize.w - this.playerSize.w
        else this.playerPos.x += 70
    }

    shootBullets() {
        if (this.bullets.length < 5) {
            this.bullets.push(new Bullet(this.ctx, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h, this.canvasSize))
            this.audioShootBullets()
        }
    }

    audioShootBullets() {
        let audioElement = document.getElementById("audioShoot");
        audioElement.play();
    }

    clearBullets() {
        this.bullets = this.bullets.filter(bullet => bullet.bulletPos.y > 0)
    }

}