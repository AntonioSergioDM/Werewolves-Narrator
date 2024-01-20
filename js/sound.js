var sound = function () {
    let audio, bgAudio, tickAudio;

    let background = function () {
        bgAudio = new Audio('audio/bg_music.mp3');
        bgAudio.loop = true;
        bgAudio.autoplay = true;
        bgAudio.volume = 0.1;
    }

    let tickTock = function() {
        tickAudio = tickAudio || new Audio('audio/tick_tock.mp3');
        tickAudio.play();
    }

    /**
     * 
     * @param {string} filename 
     * @param {Number} sleep Minimum sleep time
     * @returns 
     */
    let play = async function (filename, sleep) {
        audio = new Audio('audio/' + (filename||'introduction') + '.wav');
        audio.play();
        return new Promise(resolve => setTimeout(resolve, Math.min(sleep, (audio.duration)||sleep)*1000));
    }

    return {
        play: play,
        background: background,
        tickTock: tickTock
    }
}();