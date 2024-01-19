
$(document).ready(() => {
    let charsDiv = $('#characters');
    let firstNightBtn = $('#firstNight');
    let otherNightBtn = $('#otherNight');
    let resetBtn = $('#reset');
    let startChars = {};
    let activeChars = {};

    let init = function () {
        charsDiv.on('change', onCharClick);
        firstNightBtn.on('click', onFirstNight);
        otherNightBtn.on('click', onNight);
        resetBtn.on('click', onReset);
    };

    let onCharClick = function (evt) {
        let char = $(evt.target);
        activeChars[char.prop('id')] = char.prop('checked');
    };

    let onReset = function () {
        otherNightBtn.hide();
        resetBtn.hide();
        firstNightBtn.show();

        $('.characters_list input[type="checkbox"]').each((_, element)=>{
            $(element).prop('checked', startChars[$(element).prop('id')]);
        });
    };

    let onFirstNight = function () {
        otherNightBtn.show();
        resetBtn.show();
        firstNightBtn.hide();

        startChars = {...activeChars};
        runNight(firstNightOrder);
        runDay();
    };

    let onNight = function () {
        runNight(nightOrder);
        runDay();
    };

    let runNight = function(order) {
        order.forEach(name => {
            if (activeChars[name]) {
                // TODO play audio
            }
        });
    };

    let runDay = function() {
        // TODO Timer
    }



    init();
});
