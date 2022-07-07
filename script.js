/*
* DOM
* Document Object Model
* */

/*
*Programação imperativa vs declatariva
* Imperativa: passo a passo do que deve ser feito
* Declarativa: diz o que deve ser feito, sem dar o passo a passo
* */


// Callback: função chamada como argumento de outra função

let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let stopButton = document.querySelector('.stop')
let setButton = document.querySelector('.set')
const soundButtonOn = document.querySelector('.sound-on')
const soundButtonOff = document.querySelector('.sound-off')
let minutes
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    setTimeout(function () {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)

        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0 ) {
            seconds = 2
            --minutes
        }

updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

playButton.addEventListener('click', function () {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')
    countdown()
    
})

pauseButton.addEventListener('click', function () {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
})

stopButton.addEventListener('click', function () {
   resetControls()
})

soundButtonOff.addEventListener('click', function () {
    soundButtonOff.classList.add('hide')
    soundButtonOn.classList.remove('hide')
})

soundButtonOn.addEventListener('click', function () {
    soundButtonOn.classList.add('hide')
    soundButtonOff.classList.remove('hide')
})

setButton.addEventListener('click', function () {
    minutes = prompt('Quantos minutos?')
    updateTimerDisplay(minutes, 0)
})
