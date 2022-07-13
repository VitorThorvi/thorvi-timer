import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import Events from "./events.js"
import {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    displayMinutes,
    displaySeconds
} from "./elements.js"


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

Events({controls, timer, sound})
