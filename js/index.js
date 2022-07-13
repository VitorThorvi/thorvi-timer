/*
import "./controls"
import "./timer"
*/
// default import
import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundButtonOn,
    soundButtonOff,
    displayMinutes,
    displaySeconds
} from "./elements.js"

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


const controls = Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset,
})

const sound = Sounds()

playButton.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()

})

pauseButton.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

stopButton.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

soundButtonOff.addEventListener('click', function () {
    soundButtonOff.classList.add('hide')
    soundButtonOn.classList.remove('hide')
    sound.bgAudio.pause()
})

soundButtonOn.addEventListener('click', function () {
    soundButtonOn.classList.add('hide')
    soundButtonOff.classList.remove('hide')
    sound.bgAudio.play()
})

setButton.addEventListener('click', function () {
    sound.pressButton()
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
