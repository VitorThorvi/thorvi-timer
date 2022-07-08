/*
* Este arquivo representa um módulo.
* Um módulo não pode ter vários exports.
* Para poder exportar as várias funções devemos
* ter um named export
* */

function updateTimerDisplay(minutes, seconds) {
    displayMinutes["textContent"] = String(minutes).padStart(2, "0")
    displaySeconds["textContent"] = String(seconds).padStart(2, "0")
}

function resetTimer () {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 3
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}
// named export
export {countdown, resetTimer}
