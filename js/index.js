/*
import "./controls"
import "./timer"
*/
// default import
import Timer from "./timer.js";
import Controls from "./controls.js";
/*
named import
import { countdown, resetTimer } from "./timer";
*/


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

const controls = Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    timerTimeOut,
    resetControls: controls.reset,
})

playButton.addEventListener('click', function () {
    controls.play()
    timer.countdown()

})

pauseButton.addEventListener('click', function () {
    controls.pause()
    clearTimeout(timerTimeOut)
})

stopButton.addEventListener('click', function () {
    controls.reset()
    timer.resetTimer()
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
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)

})
