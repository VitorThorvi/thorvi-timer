export default function Controls({
    pauseButton,
    playButton,
    setButton,
    stopButton
}) {

    function play() {
        playButton.classList.add('hide')
        pauseButton.classList.remove('hide')
        setButton.classList.add('hide')
        stopButton.classList.remove('hide')
    }

    function pause() {
        pauseButton.classList.add('hide')
        playButton.classList.remove('hide')
    }

    function reset() {
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')
        setButton.classList.remove('hide')
        stopButton.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
