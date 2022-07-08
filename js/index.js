/*
import "./controls"
import "./timer"
*/
// default import
import resetControls from "./controls";

// named import
import { countdown, resetTimer } from "./timer";
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
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)
let timerTimeOut

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
    clearTimeout(timerTimeOut)
})

stopButton.addEventListener('click', function () {
    resetControls()
    resetTimer()
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
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})
