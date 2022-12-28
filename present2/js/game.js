const game = {
    name: 'Kill Zombies',
    author: 'Javier Ruiz , Natalia Pinzon, Rafael Sanchez',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas Game',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined, // to call canvas
    player: undefined,
    framesCounter: 0,
    enemies: [],
    crazyEnemies: [],
    score: 0,
    background: undefined,
   


    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.reset()
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createPlayer()
        this.drawAll()
        this.clearAll()
        this.start()
    },

    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth * .5,
            h: window.innerHeight * .91
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    createPlayer() {
        this.player = new Player(this.ctx, this.canvasSize.w, this.canvasSize.h)
    },

    start() {
        this.interval = setInterval(() => {
            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++
            this.audioBob()
            this.clearAll()
            this.drawAll()
            this.generateCrazyEnemies()
            this.generateEnemies()
            this.clearEnemies()
            this.restLife()
            this.sumScore()
            this.printScore()
            this.printLives()
        }, 50 )
    },

    reset() {
        clearInterval(this.interval)
        this.player = undefined
        this.enemies = []
        this.crazyEnemies = []
        this.score = 0
        this.lives = 3
    },

    drawAll() {
        this.drawBattleField()
        this.enemies.forEach(enemy => enemy.draw(this.framesCounter))
        this.crazyEnemies.forEach(crazyEnemy => crazyEnemy.draw(this.framesCounter))
        this.player.draw(this.framesCounter)   
    },

    setEventListeners() {
        document.onkeydown = e => {
            const { keyCode } = e
            switch (keyCode) {
                case 37:
                    this.player.moveLeft()
                    break;
                case 39:
                    this.player.moveRight()
                    break;
                case 83:
                    this.player.shootBullets()
                    this.isCollisionBulletEnemy()
                    break;
            }
        }
    },

    drawBattleField() {
        this.image = new Image(),
        this.image.src = "images/fondo.png" 
        this.ctx.drawImage(this.image, - 165, 0, this.canvasSize.w + 350,this.canvasSize.h)
        //this.ctx.fillStyle = 'black'
        //this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateEnemies() {
        if (this.framesCounter % 30 === 0) {
            this.enemies.push(new Enemy(this.ctx, this.player.playerSize.w, this.canvasSize.w, this.canvasSize.h))
        }
    },

    generateCrazyEnemies() {
        if (this.framesCounter % 50 === 0) {
            this.crazyEnemies.push(new CrazyEnemy(this.ctx, this.player.playerSize.w, this.canvasSize.w, this.canvasSize.h))
        }
    },

    clearEnemies() {
        this.enemies = this.enemies.filter((enemy) => enemy.enemyPos.y < this.canvasSize.h)
        this.crazyEnemies = this.crazyEnemies.filter((crazyEnemy) => crazyEnemy.crazyEnemyPos.y < this.canvasSize.h)
    },

    isCollisionEnemy() {
        let idxEnemy = undefined
        let hasCollided = false
        this.enemies.some((enemy, idxEnemy) => {
            if ((this.player.playerPos.x < enemy.enemyPos.x + enemy.enemySize.w) &&
                (this.player.playerPos.x + this.player.playerSize.w > enemy.enemyPos.x) &&
                (this.player.playerPos.y < enemy.enemyPos.y + enemy.enemySize.h) &&
                (this.player.playerSize.h + this.player.playerPos.y > enemy.enemyPos.y)) {
                idxEnemy = idxEnemy
                hasCollided = true
            }
        })
        return { hasCollided: hasCollided, idxEnemy: idxEnemy }
    },

    isCollisionCrazyEnemy() {
        let idxCrazyEnemy = undefined
        let hasCollided = false
        this.crazyEnemies.some((crazyEnemy, idxCrazyEnemy) => {
            if ((this.player.playerPos.x < crazyEnemy.crazyEnemyPos.x + crazyEnemy.crazyEnemySize.w) &&
                (this.player.playerPos.x + this.player.playerSize.w > crazyEnemy.crazyEnemyPos.x) &&
                (this.player.playerPos.y < crazyEnemy.crazyEnemyPos.y + crazyEnemy.crazyEnemySize.h) &&
                (this.player.playerSize.h + this.player.playerPos.y > crazyEnemy.crazyEnemyPos.y)) {
                idxCrazyEnemy = idxCrazyEnemy
                hasCollided = true
            }
        })
        return { hasCollided: hasCollided, idxCrazyEnemy: idxCrazyEnemy }
    },

    isCollisionBulletEnemy() {
        let idxBulletCollided = undefined
        let idxEnemyCollided = undefined
        this.player.bullets.forEach((bullet, idxBullet) => {
            this.enemies.forEach((enemy, idxEnemy) => {
                if (bullet.bulletPos.x < enemy.enemyPos.x + enemy.enemySize.w &&
                    bullet.bulletPos.x + bullet.bulletSize.w > enemy.enemyPos.x &&
                    bullet.bulletPos.y < enemy.enemyPos.y + enemy.enemySize.h &&
                    bullet.bulletSize.h + bullet.bulletPos.y > enemy.enemyPos.y) {
                    idxBulletCollided = idxBullet
                    idxEnemyCollided = idxEnemy
                }
            })
        })
        return { idxEnemy: idxEnemyCollided, idxBullet: idxBulletCollided }
    },

    isCollisionBulletCrazyEnemy() {
        let idxBulletCollided = undefined
        let idxCrazyEnemyColided = undefined
        this.player.bullets.forEach((bullet, idxBullet) => {
            this.crazyEnemies.forEach((crazyEnemy, idxCrazyEnemy) => {
                if ((bullet.bulletPos.x < crazyEnemy.crazyEnemyPos.x + crazyEnemy.crazyEnemySize.w) &&
                    (bullet.bulletPos.x + bullet.bulletSize.w > crazyEnemy.crazyEnemyPos.x) &&
                    (bullet.bulletPos.y < crazyEnemy.crazyEnemyPos.y + crazyEnemy.crazyEnemySize.h) &&
                    (bullet.bulletSize.h + bullet.bulletPos.y > crazyEnemy.crazyEnemyPos.y)) {
                    idxBulletCollided = idxBullet
                    idxCrazyEnemyColided = idxCrazyEnemy
                }
            })
        })
        return { idxBullet: idxBulletCollided, idxCrazyEnemy: idxCrazyEnemyColided }
    },

    restLife() {
        const collisionEnemyResult = this.isCollisionEnemy()
        if (collisionEnemyResult.hasCollided)
            this.enemies.splice(collisionEnemyResult.idxEnemy, 1)

        const collisionCrazyEnemyResult = this.isCollisionCrazyEnemy()
        if (collisionCrazyEnemyResult.hasCollided)
            this.crazyEnemies.splice(collisionCrazyEnemyResult.idxCrazyEnemy, 1)

        /* if (this.player.playerBackgroundColor === 'red')
            this.player.playerBackgroundColor = 'black' */

        if (collisionEnemyResult.hasCollided || collisionCrazyEnemyResult.hasCollided) {
            this.player.lives--
            this.soundLostLife()
            // this.player.playerBackgroundColor = 'red'
        }

        if (this.player.lives <= 0)
            this.gameOver()
    },

    sumScore() {
        const collisionEnemy = this.isCollisionBulletEnemy()
        if (collisionEnemy.idxEnemy !== undefined) {
            this.score += this.enemies[collisionEnemy.idxEnemy].enemyScore
            this.enemies.splice(collisionEnemy.idxEnemy, 1)
            this.player.bullets.splice(collisionEnemy.idxBullet, 1)
            this.soundCollision()
        }

        let collisionCrazyEnemy = this.isCollisionBulletCrazyEnemy()
        if (collisionCrazyEnemy.idxBullet !== undefined) {
            this.score += this.crazyEnemies[collisionCrazyEnemy.idxCrazyEnemy].crazyEnemyScore
            this.crazyEnemies.splice(collisionCrazyEnemy.idxCrazyEnemy, 1)
            this.player.bullets.splice(collisionCrazyEnemy.idxBullet, 1)
            this.soundCollision()
        }
    },

    printScore() {
        document.getElementById('score').innerHTML = this.score
    },

    printLives() {
        document.getElementById('lives').innerHTML = this.player.lives
    },

    printHighScore() {
        if (this.score > Number(document.getElementById('high').innerHTML))
            document.getElementById('high').innerHTML = this.score
    },

    printGameOver() {
        //this.ctx.fillStyle = 'white'
        //this.ctx.fillRect (this.canvasSize.w / 2 - this.canvasSize.w / 2.3, this.canvasSize.h / 2 - 125, 550, 200)
        let text = 'GAME OVER!'
        this.ctx.font = 'bold 80px Arial'
        this.ctx.fillStyle = 'black'
        let x = this.canvasSize.w / 2 - this.canvasSize.w / 2.5
        let y = this.canvasSize.h / 2
        this.ctx.fillText(text, x, y)
    },

    soundCollision() {
        let audioElement = document.getElementById("audioCollision");
        audioElement.play();
    },

    soundLostLife() {
        let audioLostLife = document.getElementById("lostLife")
        audioLostLife.play()
    },

    audioBob() {
        let bobMusic = document.getElementById("audioBob")
        bobMusic.play()
    },

    audioGameOver() {
        let audioGameOver = document.getElementById("gameOver")
        audioGameOver.play()
    },

    pauseAudioBob() {
        let bobMusic = document.getElementById("audioBob")
        bobMusic.pause();
    },

    gameOver() {
        this.printHighScore()
        this.printGameOver()
        this.pauseAudioBob()
        this.audioGameOver()
        clearInterval(this.interval)
    }

}



