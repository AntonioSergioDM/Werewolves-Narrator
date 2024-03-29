var tips = {
    nightFall: function () {
        return "The night falls";
    },

    dawn: function () {
        return "The dawn breaks";
    },

    xeriffVote: function () {
        return "The village chooses a xeriff";
    },

    discussion: function () {
        return "The village talks about last night events";
    },
    
    deadReveal: function () {
        let str = 'Some people are found dead' + '<ul>';

        if (activeChars.hunter) {
            str += "<li>If the hunter didn't die by the witch, he must shoot NOW!</li>";
        }

        if (activeChars.elder) {
            str += "<li>If the elder was killed by the wolfs, he may survive once</li>";
        }

        if (startChars.cupid) {
            str += "<li>A lonely Lover takes is own life out of heatbreak</li>";
        }

        return str + '</ul>';
    },

    votingTips: function () {
        let str = 'The village must vote a suspect to take the blame' + '<ul>';

        if (activeChars.idiot) {
            str += "<li>If the idiot has already been revealed, he cannot vote</li>";
            str += "<li>If the idiot is voted, he reveals is card but stays alive as a simple villager</li>";
        }

        if (nightCounter >= 2) {
            str += "<li>The xeriff vote counts double</li>";
        }

        return str + '</ul>';
    },
};