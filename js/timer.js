var timer = function () {
    let timerElem, minutes, seconds, timer;
    function startTimer(seconds, elem) {
        timerElem = elem;
        minutes = parseInt(seconds / 60, 10)
        seconds = parseInt(seconds % 60, 10);
        changeTimer();
    }

    function changeTimer() {
        timerElem.html(
            (minutes < 10 ? "0" + minutes : minutes) +
            ':' +
            (seconds < 10 ? "0" + seconds : seconds)
        );

        if (--seconds < 0) {
            seconds = 59;
            minutes--
        }

        if (minutes >= 0) {
            timer = setTimeout(changeTimer, 1000);
        }
    }

    function stopTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = false;
        }
    }

    return {
        startTimer: startTimer,
        stopTimer: stopTimer
    };
}()