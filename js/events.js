import {pauseButton, playButton, setButton, soundButtonOff, soundButtonOn, stopButton} from "./elements.js";

export default function ({controls, timer, sound}) {

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
    sound.bgAudio.play()
})

soundButtonOn.addEventListener('click', function () {
    soundButtonOn.classList.add('hide')
    soundButtonOff.classList.remove('hide')
    sound.bgAudio.pause()
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
}
