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
        // angel (before firstNight)

        let str = 'Some people are found dead' + '<ul>';

        if (activeChars.hunter) {
            str += "<li>If the hunter didn't die by the witch, he must shoot NOW!</li>";
        }

        if (activeChars.elder) {
            str += "<li>If the elder was killed by the wolfs, he may survive once</li>";
        }

        if (activeChars.lovers) {
            str += "<li>A lonely Lover takes is own life out of heatbreak (<span style=\"text-decoration: underline;\" onClick=\"activeChars['lovers']=false;$(this).closest('li').hide();\">Remove Lovers</span>)</li>";
        }

        return str + '</ul>';
    },

    votingTips: function () {
        let str = 'The village must vote a suspect to take the blame' + '<ul>';

        if (nightCounter >= 2) {
            str += "<li>The xeriff vote counts double</li>";
        }

        if (activeChars.idiot) {
            str += "<li>If the idiot has already been revealed, he cannot vote</li>";
            str += "<li>If the idiot is voted, he reveals his card but stays alive as a simple villager</li>";
        }

        if (activeChars.lovers) {
            str += "<li>A lonely Lover takes is own life out of heatbreak (<span style=\"text-decoration: underline;\" onClick=\"activeChars['lovers']=false;$(this).closest('li').hide();\">Remove Lovers</span>)</li>";
        }

        // scapegoat

        // devouted servant

        if (activeChars.judge) {
            str += "<li>The judge may call for an extra vote</li>";
        }

        return str + '</ul>';
    },

    witchAtNight: function (potions) {
        let str = 'Witch <ul>';

        str += '<li>May save the wolf victim (';
        if (potions.save) {
            str += "<span style=\"text-decoration: underline;\" onClick=\"potions['save']=potions.save-1;$(this).closest('li').hide();\">Use potion</span>";
        } else {
            str += 'Already used';
        }
        str += ')</li>';

        str += '<li>May take a life (';
        if (potions.kill) {
            str += "<span style=\"text-decoration: underline;\" onClick=\"potions['kill']=potions.kill-1;$(this).closest('li').hide();\">Use potion</span>";
        } else {
            str += 'Already used';
        }
        str += ')</li>';


        return str + '</ul>';
    },
};