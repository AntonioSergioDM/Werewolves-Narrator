let charsDiv, firstNightBtn, otherNightBtn, gameTips, resetBtn, activeChars;
let nightCounter = 0;
let potions = { save: 1, kill: 1 };

let init = function () {
    initSettings();
    charsDiv = $('#characters');
    firstNightBtn = $('#firstNight');
    otherNightBtn = $('#otherNight');
    gameTips = $('#gameTips');
    gameImgs = $('#gameImgs');
    resetBtn = $('#reset');
    nextBtn = $('#next');
    startChars = {};
    activeChars = {};

    charsDiv.on('change', onCharClick);
    firstNightBtn.on('click', onFirstNight);
    otherNightBtn.on('click', onNight);
    resetBtn.on('click', onReset);
    timer.setTimerElem($('#timer'));

    if (!settings.automode) {
        nextBtn.show();
        nextBtn.on('click', () => next = true);
    }

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

    // add lovers
    if (char.prop('id') === 'cupid') {
        activeChars['lovers'] = char.prop('checked');
    }

    // start with day if angel is active
    if (char.prop('id') === 'angel' && char.prop('checked')) {
        nightCounter = -1 ;
    }
};

let onReset = function () {
    resetBtn.hide();
    otherNightBtn.hide();
    firstNightBtn.show();
    charsDiv.removeClass('hide_inactive');
    gameTips.hide();
    gameImgs.html('');
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
    charsDiv.addClass('hide_inactive');

    startChars = { ...activeChars };
    onNight();
};

let onNight = async function () {
    otherNightBtn.prop('disabled', true);

    if (nightCounter > -1) {
        await runNight();
    } else {
        // skip first night if angel is in play
        nightCounter = 0;
    }

    await runDay();

    otherNightBtn.prop('disabled', false);
};

let runNight = async function () {
    nightCounter++;
    gameTips.html(tips.nightFall()).show();
    if (settings.sound) {
        await sound.play('introduction', 5);
    } else {
        await timer.startTimer(1);
    }
    for (const name of nightOrder) {
        if (activeChars[name] || name === 'werewolves') {
            const character = charOptions[name] ?? {};

            if (
                !(nightCounter !== 1 && character.onlyFirstNight) // some charatecters only wake on first night
                && (nightCounter % (character.wakesOnEvery ?? 1) === 0) // some charatecters only wake every X nights
            ) {
                gameTips.html(tips.atNight(name));

                gameImgs.html(tips.atNightImg(name));

                if (settings.sound) {
                    sound.play(name);
                }

                await waitFor(character.time ?? settings.nightDefaultTime);
            }
        }
    }

    gameTips.hide();
    gameImgs.html('');
};

let runDay = async function () {
    gameTips.html(tips.dawn()).show();
    if (settings.sound) {
        await sound.play('introduction');
    } else {
        await timer.startTimer(1);
    }

    gameTips.html(tips.deadReveal());
    await waitFor(settings.discussTime);

    gameTips.html(tips.discussion());
    await waitFor(settings.discussTime);

    gameTips.html(tips.votingTips());
    await waitFor(settings.discussTime);
};


const timeout = async ms => new Promise(res => setTimeout(res, ms));
let next = false; // this is to be changed on user input

let waitNextClick = async function () {
    next = false; // reset var
    while (next === false) await timeout(50); // pauses script
};

let waitFor = async function (time) {
    if (!settings.automode) {
        timer.startTimer(time);
        await waitNextClick();
        timer.stopTimer();
    } else {
        await timer.startTimer(time);
    }
};

$(init);
