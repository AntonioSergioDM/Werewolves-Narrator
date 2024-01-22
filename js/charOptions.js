/*
Programed options and its defaults

time: 15,
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
    'elder': {requiresModerator: true,}, // can be played without with minor adjustments

    'thief': {onlyFirstNight: true},
    'cupid': {
        time: 30,
        onlyFirstNight: true
    },
    'brothers': {},
    'sisters': {},

    'hunter': {},
    'idiot': {},

    'defender': {requiresModerator: true,},
    'gypsy': {requiresModerator: true,}, // can be played without with minor adjustments
    'judge': {requiresModerator: true,},
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