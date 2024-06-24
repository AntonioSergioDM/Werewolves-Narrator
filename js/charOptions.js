/*
Programed options and its defaults

time: settings.nightDefaultTime,
onlyFirstNight: false,
wakesOnEvery: 1, // wakes every X nights
requiresModerator: false,
 */

var charOptions = {
    'werewolves': {
        time: 3
    },
    'bigbadwolf': {},
    'whitewolf': {
        wakesOnEvery: 2
    },
    'wolffather': {},
    'wolfhound': {},
    'wildchild': {},
    
    'seer': {},
    'witch': {
        time:20
    },
    'elder': {
        requiresModerator: true, // can be played without with minor adjustments
        onlyFirstNight: true
    },

    'thief': {onlyFirstNight: true},
    'cupid': {
        time: 15,
        onlyFirstNight: true,
        requiresModerator: true, // can be played without with minor adjustments
    },
    'lovers': { // It's a gain attribute
        time: 15,
        onlyFirstNight: true,
        requiresModerator: true, // can be played without with minor adjustments
    },
    'brothers': {},
    'sisters': {},

    'hunter': {},
    'idiot': {},

    'defender': {requiresModerator: true,},
    'gypsy': {requiresModerator: true,}, // can be played without with minor adjustments
    'judge': {
        requiresModerator: true,
        onlyFirstNight: true,
    },
    'knight': {requiresModerator: true,}, // until the on dead events take place
    'pyromaniac': {},
    'scandalmonger': {},
    'scapegoat': {},

    'beartamer': {onlyFirstNight: true},
    'fox': {requiresModerator: true,},

    'actor': {},
    'angel': {},
    'piper': {},
    'servant': {},
    'girl': {},
    'villager': {},
    'manipulator': {},
};