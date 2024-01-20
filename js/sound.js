var sound = function () {
    let audio, bgAudio;

    let background = function () {
        bgAudio = new Audio('audio/bg_music.mp3');
        bgAudio.loop = true;
        bgAudio.autoplay = true;
        bgAudio.volume = 0.1;
    }

    let play = function (filename) {
        audio = new Audio('audio/' + filename + '.wav');

        audio.play();
    }

    return {
        play: play,
        background: background
    }
}();