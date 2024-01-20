let charsDiv, firstNightBtn, otherNightBtn, gameTips, resetBtn, activeChars;

let init = function () {
    charsDiv = $('#characters');
    firstNightBtn = $('#firstNight');
    otherNightBtn = $('#otherNight');
    gameTips = $('#gameTips');
    resetBtn = $('#reset');
    startChars = {};
    activeChars = {};

    charsDiv.on('change', onCharClick);
    firstNightBtn.on('click', onFirstNight);
    otherNightBtn.on('click', onNight);
    resetBtn.on('click', onReset);
    timer.setTimerElem($('#timer'));
    // sound.background();
    loadChars();
};

let loadChars = function () {
    let charString = charsDiv.html();
    let html = '';

    listOrder.forEach((name) => {
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
    gameTips.hide();
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
    runNight(true);
    runDay();
};

let onNight = function () {
    runNight();
    runDay();
};

let runNight = function (firstNight) {
    gameTips.html('').show();
    sound.play('introduction');
    nightOrder.forEach(name => {
        if (activeChars[name]) {
            if (firstNight || !charOptions[name]?.onlyFirstNight) {
                gameTips.html(name);
                timer.startTimer(charOptions[name]?.time ?? 15);
            }
        }
    });
};

let runDay = function () {
    // TODO Timer
}

$(init);
