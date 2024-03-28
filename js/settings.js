var settings = {
    backgroundMusic: true,
    sound: false,
    automode: false,
    discussTime: 60,
    nightDefaultTime: 15,
};

let settingsHolder, contentHolder;

let camelCaseToWords = function (s) {
    const result = s.replace(/([A-Z])/g, ' $1');
    return (result.charAt(0).toUpperCase() + result.slice(1)).trim();
}

let drawSettings = function () {
    let str = "<ul>";
    for (const setting of Object.keys(settings)) {
        str += '<li>'
            + '     <span>' + camelCaseToWords(setting) + '</span>'
            + '     <span>'
            + '         <input type="' + (typeof settings[setting] == "boolean" ? 'checkbox' : 'number') + '"'
            + '                name="' + setting + '"'
            + '                value="' + settings[setting] + '"' + (typeof settings[setting] == "boolean" &&  settings[setting]? 'checked' : '') + '/>'
            + '     </span>'
            + ' </li>';
    }

    str += ''
        + '<li>'
        + '     <span></span>'
        + '     <button id="back2game" class="button">Go back</button>'
        + '     <span></span>'
        + '</li>'
        + '</ul>';

    settingsHolder.html(str);
    onSettingChange();
};

let onSettingChange = function () {
    settingsHolder.find('input').each((_, elem) => {
        settings[elem.name] = elem.type === 'checkbox' ? elem.checked : parseInt(elem.value);
    });

    if (settings.backgroundMusic) {
        sound?.background();
    } else {
        sound?.backgroundStop();
    }
    if (!settings.sound) {
        sound?.stop();
    }
};

let toogleSettings = function() {
    settingsHolder.toggle();
    contentHolder.toggle();
};

var initSettings = function () {
    settingsHolder = $('#settingsHolder');
    contentHolder = $('#content');
    drawSettings();
    $('#settingsIcon, #back2game').on('click', toogleSettings);
    settingsHolder.on('change', onSettingChange);

};