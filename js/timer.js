/*
* Este arquivo representa um módulo.
* Um módulo não pode ter vários exports.
* Para poder exportar as várias funções devemos
* ter um named export
* */


/*
* Abaixo em 'function timer () temos um
* design patter chamado factory.
* é uma função que retorna um objeto.
* */

/* se usar a sintaxe:
* export function timer () {...}
* estarei utilizando um named export e
* consequentemente onde for importar
* precisarei usar o mesmo nome dado
* aqui neste escopo
*
* Por esse motivo é preferível usar a sintaxe:
* export default function timer () {...}
* pois assim, tendo apenas uma função
* exportada, no local em que ela for
* importada ela poderá ter qualquer nome
* */

export function Timer ({
    displayMinutes,
    displaySeconds,
    timerTimeOut,
    resetControls,
}) {

    function updateTimerDisplay(minutes, seconds) {
        displayMinutes["textContent"] = String(minutes).padStart(2, "0")
        displaySeconds["textContent"] = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
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

    return {
        countdown,
        resetTimer
    }
}

/*
// named export
export {countdown, resetTimer}
*/
