var sound = function () {
    let audio, bgAudio, tickAudio;

    let background = function () {
        if (bgAudio) {
            bgAudio.play();
            return;
        }
        
        bgAudio = new Audio('audio/bg_music.mp3');
        bgAudio.loop = true;
        bgAudio.autoplay = true;
        bgAudio.volume = 0.1;
    };

    let backgroundStop = function() {
        bgAudio?.pause();
    };

    let tickTock = function() {
        tickAudio = tickAudio || new Audio('audio/tick_tock.mp3');
        tickAudio.play();
    };

    let stop = function () {
        audio?.pause();
    }

    /**
     * 
     * @param {string} filename 
     * @param {Number} sleep Minimum sleep time
     * @returns 
     */
    let play = async function (filename, sleep) {
        stop();
        audio = new Audio('audio/' + (filename||'introduction') + '.wav');
        audio.play();
        return new Promise(resolve => setTimeout(resolve, Math.min(sleep, (audio.duration)||sleep)*1000));
    };

    return {
        play: play,
        stop: stop,
        background: background,
        backgroundStop: backgroundStop,
        tickTock: tickTock,
    };
}();