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
        if (nightCounter === 0) {
            return 'The presence of the Angels forces a vote before the first night';
        }
        let str = 'Some people are found dead' + '<ul>';

        if (nightCounter === 1 && activeChars.angel) {
            str += "<li>If the Angel died, he wakes up and wins the game</li>";
        }


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

        if (nightCounter === 0 && activeChars.angel) {
            str += "<li>If the Angel died, he wakes up and wins the game</li>";
        }

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

    atNight: function (name) {
        let str = '';
        switch (name) {
            case 'werewolves':
                str = 'Werewolves <ul>';

                str += '<li>All werewolves wake up</li>';

                if (nightCounter===1 && activeChars.wolfhound) {
                    str += '<li>The wolfhound chooses if he becomes a wolf</li>';
                } else if (activeChars.wolfhound) {
                    str += '<li>If the wolfhound chose to be a wolf, wakes up with the wolfs</li>';
                }
            
                if (nightCounter > 1 && activeChars.wildchild) {
                    str += '<li>If the wildchild\'s role model is dead, he wakes now</li>';
                }

                if (activeChars.girl) {
                    str += '<li>The girl may spy. If the wolves notice her, she immediatly becomes the victim</li>';
                }

                return str + '</ul>';

            case witch:
                str = 'Witch <ul>';

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

            default:
                return name.charAt(0).toUpperCase() + name.slice(1);
        }
    },

    atNightImg: function (name) {
        let imgs;
        switch (name) {
            case 'werewolves':
                imgs = $('<div></div>');

                [
                    'werewolves', 'whitewolf', 'wolffather', 'bigbadwolf',
                    'wolfhound', 'wildchild', 'girl',
                ].forEach(function (char) {
                    if (activeChars[char]) {
                        imgs.append($('#' + char + 'Img')?.clone() || '');
                    }
                });

                return imgs.html();

            default:
                return $('#' + name + 'Img')?.clone() || '';
        }
    },
};