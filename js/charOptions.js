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
    'elder': {requiresModerator: true,},

    'thief': {onlyFirstNight: true},
    'cupid': {
        time: 30,
        onlyFirstNight: true
    },
    'brothers': {},
    'sisters': {},

    'hunter': {},
    'idiot': {},

    'defender': {},
    'gypsy': {},
    'judge': {requiresModerator: true,},
    'knight': {},
    'pyromaniac': {},
    'scandalmonger': {},
    'scapegoat': {},

    'beartamer': {onlyFirstNight: true},
    'fox': {},

    'actor': {},
    'angel': {},
    'piper': {},
    'servant': {},
    'girl': {},
    'villager': {},
    'manipulator': {},
};