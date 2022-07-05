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

function countdown() {
    setTimeout(function () {
        let seconds = Number(displaySeconds.textContent)

        if (seconds <= 0 ) {
            seconds = 60
        }

        displaySeconds.textContent = seconds - 1
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
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
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
    displayMinutes.textContent = minutes
})
