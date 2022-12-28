const startBtn = document.getElementById('startButton')

startBtn.onclick = () => {
    game.init('#canvas')
    startBtn.innerHTML = 'RESTART'
    startBtn.style.backgroundColor = 'white'
    startBtn.style.color = 'black'
}
