var timer = function () {
    let timerElem, min, sec, timer;
    let startTimer = function (seconds, elem) {
        timerElem = elem;
        min = parseInt(seconds / 60, 10)
        sec = parseInt(seconds % 60, 10);
        changeTimer();
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
        startTimer: startTimer,
        stopTimer: stopTimer
    };
}()