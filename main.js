const styleCode =
`/*
** Tặng em iêu của anh ngày kỉ niệm 2 năm
** Mình có thi vẽ tranh với nhau 
** This is the picture of usssssssssssss
*/

.usagi-container {
  width: 27rem;
  height: 19rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -23rem;
  overflow:hidden;
}

/*
** Cái đầu to này nhìn quen quen!
*/

.usagi {
  border: .8rem solid #512300;
  width: 27rem;
  height: 25rem;
  position: absolute;
  bottom: -15rem;
  right: 0;
  border-bottom: none;
  border-radius: 11rem;
  background-color: #f5b4c0;
  transition: transform 0.5s;
}

/*
** Hai cái tai siêu bự để treo lên tủ
*/

.usagi .ear {
  border: .8rem solid #512300;
  height: 7.2rem;
  width: 4.6rem;
  background-color: #f5b4c0;
  position: absolute;
  border-bottom: none;
}

.usagi .ear.left {
  top: -7.1rem;
  left: 50%;
  margin-left: -5.5rem;
  transform: rotate(-3deg);
  border-top-left-radius: 3.7rem 7.5rem;
  border-top-right-radius: 2.7rem 3.8rem;
}

.usagi .ear.right {
  top: -7rem;
  left: 50%;
  margin-left: 1.7rem;
  transform: rotate(6deg);
  border-top-left-radius: 2.6rem 4rem;
  border-top-right-radius: 2.7rem 3.8rem;
}

.usagi .ear.left::after,
.usagi .ear.right::after {
  content: '';
  width: 2.9rem;
  height: 1rem;
  position: absolute;
  top: 5.8rem;
  left: 1%;
  background-color: #f5b4c0;
}

/*
** Van Gogh của code
*/

.usagi .face {
  background-color: #fff;
  height: 10rem;
  width: 6.4rem;
  border-radius: 50%;
  position: absolute;
  top: 3.6rem;
  left: 50%;
  margin-left: -3.2rem;
}

.usagi .eye::before,
.usagi .eye::after {
  content: '';
  background-color: #512300;
  border-radius: 50%;
  width: 2rem;
  height: 1.1rem;
  position: absolute;
  top: 3.3rem;
  left: 50%;
}

.usagi .eye::before {
  margin-left: -4rem;
  transform: rotate(-22deg);
}

.usagi .eye::after {
  margin-left: 2rem;
  transform: rotate(22deg);
}

/*
** Mũi lợn
*/

.usagi .nose {
  background-color: #512300;
  border-radius: 50%;
  width: 1.6rem;
  height: .9rem;
  position: absolute;
  top: .3rem;
  left: 50%;
  margin-left: -.8rem;
}

.usagi .nose::after {
  content: '';
  background-color: #512300;
  width: .8rem;
  height: 1.9rem;
  position: absolute;
  top: .3rem;
  left: 50%;
  margin-left: -.4rem;
}

/*
** Môi để chơm
*/

.usagi .mouth.upper::before,
.usagi .mouth.upper::after {
  content: '';
  border: .8rem solid #512300;
  border-top: none;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.3rem;
  position: absolute;
  top: 1.3rem;
  left: 50%;
  z-index: 1;
}

.usagi .mouth.upper::before {
  border-left: none;
  margin-left: -2rem;
  transform: rotate(25deg);
}

.usagi .mouth.upper::after {
  border-right: none;
  margin-left: -.4rem;
  transform: rotate(-25deg);
}

.usagi .mouth.lower {
  border: .8rem solid #512300;
  background-color: #f5b4c0;
  width: 2.6rem;
  height: 2.6rem;
  position: absolute;
  top: 3.2rem;
  left: 50%;
  margin-left: -1.3rem;
  border-top: none;
  border-radius: 0 0 50% 50%;
}

/*
** Má hồng NGẠI
*/

.usagi .flush::before,
.usagi .flush::after {
  content: '';
  background-color: #f3a1ae;
  width: 5.3rem;
  height: 3.7rem;
  border-radius: 50%;
  position: absolute;
  top: 4.4rem;
  left: 50%;
}

.usagi .flush::before {
  margin-left: -9.8rem;
}

.usagi .flush::after {
  margin-left: 4.5rem;
}

/*
** Piske Đần, thats uuuu, tròn như quả bóng
*/

.piske-container {
  width: 18.2rem;
  height: 19rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: 4rem;
  overflow:hidden;
}

.piske {
  border: .6rem solid #3f180d;
  background-color: #fff;
  width: 18.2rem;
  height: 17rem;
  position: absolute;
  left: 0;
  bottom: -6.6rem;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  transition: transform 0.5s;
}

/*
** Mắt và miệng 
*/

.piske .eye::before,
.piske .eye::after {
  content: '';
  background-color: #3f180d;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 4.5rem;
  left: 50%;
}

.piske .eye::before {
  margin-left: -3.2rem;
}

.piske .eye::after {
  margin-left: 2rem;
}

.piske .mouth::before,
.piske .mouth::after {
  content: '';
  border: .6rem solid #3f180d;
  background-color: #fdd924;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.piske .mouth::before {
  width: 3rem;
  height: 2.3rem;
  border-radius: 3rem;
  top: 3.5rem;
}

.piske .mouth::after {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 3rem;
  position: absolute;
  top: 5.4rem;
}

/*
** Blush fake, sút cho cái giờ
*/

.piske .flush::before,
.piske .flush::after {
  content: '';
  background-color: #f3a1ae;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 5.5rem;
  left: 50%;
}

.piske .flush::before {
  margin-left: -6.4rem;
}

.piske .flush::after {
  margin-left: 3.9rem;
}


.usagi-container:hover>.usagi {
  transform: translateY(25%);
  transition: transform 0.5s;
}

.piske-container:hover>.piske {
  transform: translateY(24%);
  transition: transform 0.5s;
}

/*
** Quá đẳng cấp, chân dung của us, thắng hộ phát
** SIUUUUUUUUUUUUUUUUUUUUUUUUUUU!!!
*/`

const style = document.querySelector('#style')
const text = document.querySelector('#text')
const textContainer = document.querySelector('#text-container')
const btnPlayPause = document.querySelector('#btnPlayPause')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')


const player = {
  n: 0,
  styleText: '',
  timerId: undefined,
  intervalTime: 100,
  playState: 0,
  init: () => {
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    btnPlayPause.onclick = () => {
      if (player.playState === 1) {
        player.pause()
      } else {
        player.play()
      }
    }
    btnSlow.onclick = () => {
      player.btnDeactivate()
      btnSlow.classList.add('activated')
      player.slow()
    }
    btnNormal.onclick = () => {
      player.btnDeactivate()
      btnNormal.classList.add('activated')
      player.normal()
    }
    btnFast.onclick = () => {
      player.btnDeactivate()
      btnFast.classList.add('activated')
      player.fast()
    }
  },
  btnDeactivate: () => {
    btnSlow.classList.remove('activated')
    btnNormal.classList.remove('activated')
    btnFast.classList.remove('activated')
  },
  run: () => {
    if (styleCode[player.n] === '\n') {
      player.styleText += '<br>'
    } else if (styleCode[player.n] === ' ') {
      player.styleText += '&nbsp'
    } else {
      player.styleText += styleCode[player.n]
    }
    style.innerHTML = styleCode.substring(0, player.n + 1)
    text.innerHTML = player.styleText
    textContainer.scrollTop = textContainer.scrollHeight
    player.n++
    if (player.n >= styleCode.length) {
      clearInterval(player.timerId)
    }
  },
  play: () => {
    if (player.n < styleCode.length) {
      player.timerId = setInterval(player.run, player.intervalTime)
      player.playState = 1
      btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('play', 'pause')
    }
  },
  pause: () => {
    player.playState = 0
    btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('pause', 'play')
    clearInterval(player.timerId)
  },
  slow: () => {
    player.pause()
    player.intervalTime = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.intervalTime = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.intervalTime = 0
    player.play()
  }
}


player.init()


