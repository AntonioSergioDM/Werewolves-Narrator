let charsDiv, firstNightBtn, otherNightBtn, gameTips, resetBtn, activeChars, nightCounter = 0;

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

    nightCounter = 0;

    $('.characters_list input[type="checkbox"]').each((_, element) => {
        $(element).prop('checked', startChars[$(element).prop('id')]);
    });
};

let onFirstNight = async function () {
    otherNightBtn.show();
    resetBtn.show();
    firstNightBtn.hide();

    startChars = { ...activeChars };
    onNight();
};

let onNight = async function () {
    otherNightBtn.prop('disabled', true);
    await runNight();
    await runDay();
    
    otherNightBtn.prop('disabled', false);
};

let runNight = async function () {
    nightCounter++;
    gameTips.html('The night falls').show();
    await sound.play('introduction', 5);
    for (const name of nightOrder) {
        if (activeChars[name]) {
            const character = charOptions[name] ?? {};

            if (
                !(nightCounter !== 1 && character.onlyFirstNight) // some charatecters only wake on first night
                && (nightCounter % (character.wakesOnEvery ?? 1) === 0) // some charatecters only wake every X nights
            ) {
                gameTips.html(name);
                sound.play(name);
                await timer.startTimer(character.time ?? 15);

            }
        }
    }

    gameTips.hide();
};

let runDay = async function () {
    gameTips.html('The dawn breaks').show();
    sound.play('introduction');
    timer.startTimer(20);

    if (nightCounter === 2) {
        // TODO Sheriff
    }
}

$(init);
