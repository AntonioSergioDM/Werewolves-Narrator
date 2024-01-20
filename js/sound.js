var sound = function () {
    let audio, bgAudio;

    let background = function () {
        bgAudio = new Audio('audio/bg_music.mp3');
        bgAudio.loop = true;
        bgAudio.autoplay = true;
        bgAudio.volume = 0.1;
    }

    /**
     * 
     * @param {string} filename 
     * @param {Number} sleep Minimum sleep time
     * @returns 
     */
    let play = async function (filename, sleep) {
        audio = new Audio('audio/' + filename + '.wav');
        audio.play();
        return new Promise(resolve => setTimeout(resolve, Math.min(sleep, (audio.duration)||sleep)*1000));
    }

    return {
        play: play,
        background: background
    }
}();