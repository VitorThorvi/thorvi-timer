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


import Sounds from "./sounds.js";


export default function Timer({
                                  displayMinutes,
                                  displaySeconds,
                                  resetControls,
                              }) {

    let timerTimeOut
    let minutes = Number(displayMinutes.textContent)

    function updateDisplay(newMinutes, seconds) {

        newMinutes = newMinutes === undefined ? minutes : newMinutes //ternário
        seconds = seconds === undefined ? 0 : seconds
        displayMinutes["textContent"] = String(newMinutes).padStart(2, "0")
        displaySeconds["textContent"] = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(displaySeconds.textContent)
            let minutes = Number(displayMinutes.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 2
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}

/*
// named export
export {countdown, resetTimer}
*/
