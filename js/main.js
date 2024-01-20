$(document).ready(() => {
    let charsDiv = $('#characters');
    let firstNightBtn = $('#firstNight');
    let otherNightBtn = $('#otherNight');
    let gameTips = $('#gameTips');
    let timerElem = $('#timer');
    let resetBtn = $('#reset');
    let startChars = {};
    let activeChars = {};

    let init = function () {
        charsDiv.on('change', onCharClick);
        firstNightBtn.on('click', onFirstNight);
        otherNightBtn.on('click', onNight);
        resetBtn.on('click', onReset);
        loadChars();
    };

    let loadChars = function () {
        let charString = charsDiv.html();
        let html = '';

        allOrder.forEach((name) => {
            html += charString.replaceAll('character', name);
        })

        charsDiv.html(html);
    }

    let onCharClick = function (evt) {
        let char = $(evt.target);
        activeChars[char.prop('id')] = char.prop('checked');
    };

    let onReset = function () {
        resetBtn.hide();
        otherNightBtn.hide();
        firstNightBtn.show();
        timer.stopTimer();

        $('.characters_list input[type="checkbox"]').each((_, element) => {
            $(element).prop('checked', startChars[$(element).prop('id')]);
        });
    };

    let onFirstNight = function () {
        otherNightBtn.show();
        resetBtn.show();
        firstNightBtn.hide();

        startChars = { ...activeChars };
        runNight(firstNightOrder);
        runDay();
    };

    let onNight = function () {
        runNight(nightOrder);
        runDay();
    };

    let runNight = function (order) {
        gameTips.show();
        order.forEach(name => {
            if (activeChars[name]) {
                timer.startTimer(30,timerElem)
                // TODO play audio
            }
        });
    };

    let runDay = function () {
        // TODO Timer
    }



    init();
});
