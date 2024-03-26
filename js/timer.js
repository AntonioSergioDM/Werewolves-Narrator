var timer = function () {
    let timerElem, min, sec, timer;

    /**
     * @param {JQuery} elem 
     */
    let setTimerElem = function (elem) {
        timerElem = elem;
    }

    /**
     * @param {Number} seconds 
     * @param {JQuery} elem Optional if setTimerElem has already been used.
     */
    let startTimer = async function (seconds, elem) {
        elem && setTimerElem(elem);

        min = parseInt(seconds / 60, 10)
        sec = parseInt(seconds % 60, 10);
        changeTimer();
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    let changeTimer = function () {
        timerElem?.html(
            (min < 10 ? "0" + min : min) +
            ':' +
            (sec < 10 ? "0" + sec : sec)
        ).show();

        if (--sec < 0) {
            sec = 59;
            min--
        }


        if (min >= 0) {
            clearTimeout(timer);
            timer = setTimeout(changeTimer, 1000);

            if (min === 0 && sec === 5) {
                sound.tickTock();
            }
        }
    }

    let stopTimer = function () {
        if (timer) {
            clearTimeout(timer);
            timer = false;
        }

        timerElem?.hide();
    }

    return {
        setTimerElem: setTimerElem,
        startTimer: startTimer,
        stopTimer: stopTimer
    };
}();