var tips = {
    nightFall: function () {
        return "The night falls";
    },

    dawn: function () {
        return "The dawn breaks";
    },

    discussion: function () {
        if (nightCounter === 0) {
            return 'The Angel wants to wake up';
        }

        let str = "The village talks about the last events <ul>";

        if (activeChars.gipsy && medium) {
            medium = false;
            str += "<li>The chosen medium asks the chosen question. The narrator chooses a dead player to answer.</li>";
        }

        // let's vote for a xeriff
        if (nightCounter === 2 && activeChars.xeriff) {
            str += "<li>The village chooses a xeriff.";
            if (activeChars.towncrier) {
                str += '<br>The xeriff nominates a Town Crier';
            }
            str +="</li>";
        }

        return str + '</ul>';
    },

    deadReveal: function () {
        if (nightCounter === 0) {
            return 'The presence of the Angels forces a vote before the first night';
        }

        let str = 'Some people are found dead' + '<ul>';

        if (activeChars.knight && tetanus === nightCounter) {
            str += "<li>The closest werewolf, to the left of the knight dies of disease</li>";
        }

        if (fireball === 0) {
            fireball = -1;
            str += "<li>The burnt building is discarded." +
                "<br>If the wolfs picked it's resident as their meal, the werewolf to the right of the victim dies." +
                "<br>The resident becomes a vagabond</li>";
        }

        if (activeChars.witch) {
            if (potions.save === 0) {
                potions.save = -1;
                str += "<li>The witch saved the werewolf's victim</li>";
            }
            if (potions.kill === 0) {
                potions.kill = -1;
                str += "<li>The witch poisoned someone</li>";
            }
        }

        if (nightCounter === 1 && activeChars.angel) {
            str += "<li>If the Angel died, he wakes up and wins the game</li>";
        }

        if (activeChars.piper) {
            str += "<li>If all players are charmed the Piper wins the game</li>";
        }

        if (activeChars.hunter) {
            str += "<li>If the Hunter wasn't poisoned by the witch, he must shoot NOW!</li>";
        }

        if (activeChars.elder) {
            str += "<li>If the Elder was killed by the wolfs, he may survive once</li>";
        }

        if (activeChars.defender) {
            str += "<li>If the Defender protected the wolf's victim, then the victim survives";
            if (activeChars.piper) {
                str += "<br> Doesn't protect against the Piper charm"
            }
            if (activeChars.wolffather) {
                str += "<br> Doesn't protect against the WolfFather infection"
            }
            str += "</li>";
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

        if (nightCounter >= 2 && activeChars.xeriff) {
            str += "<li>The xeriff vote counts double</li>";
        }

        if (activeChars.scandalmonger) {
            str += "<li>The Scandalmonger accusation counts as 2 votes</li>";
        }

        if (activeChars.idiot) {
            str += "<li>If the Idiot has already been revealed, he cannot vote<br>If the Idiot is voted, he reveals his card but stays alive as a simple villager</li>";
        }

        if (activeChars.scapegoat) {
            str += "<li>In case of a tie, the Scapegoat dies. He then chooses who votes the next day</li>";
        }

        if (activeChars.servant) {
            str += "<li>The Devouted Servant may replace his card with the victim before the reveal, gaining it's abilities</li>";
        }

        if (activeChars.lovers) {
            str += "<li>A lonely Lover takes is own life out of heatbreak (<span style=\"text-decoration: underline;\" onClick=\"activeChars['lovers']=false;$(this).closest('li').hide();\">Remove Lovers</span>)</li>";
        }

        if (activeChars.judge) {
            str += "<li>The Judge may call for an extra vote</li>";
        }

        if (activeChars.piper) {
            str += "<li>If all players are charmed the Piper wins the game</li>";
        }

        return str + '</ul>';
    },

    atNight: function (name) {
        let str = '';
        switch (name) {
            case 'werewolves':
                str = 'Werewolves <ul>';

                str += '<li>All werewolves wake up</li>';

                if (nightCounter === 1 && activeChars.wolfhound) {
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

            case 'witch':
                str = 'Witch <ul>';

                str += '<li>May save the wolf victim (';
                if (potions.save > 0) {
                    str += "<span style=\"text-decoration: underline;\" onClick=\"potions['save']=potions.save-1;$(this).closest('li').hide();\">Use potion</span>";
                } else {
                    str += 'Already used';
                }
                str += ')</li>';

                str += '<li>May take a life (';
                if (potions.kill > 0) {
                    str += "<span style=\"text-decoration: underline;\" onClick=\"potions['kill']=potions.kill-1;$(this).closest('li').hide();\">Use potion</span>";
                } else {
                    str += 'Already used';
                }
                str += ')</li>';
                return str + '</ul>';

            case 'pyromaniac':
                str = 'Pyromaniac <ul>';

                if (fireball < 1) {
                    str += '<li>Already used his power</li>';
                } else {
                    str += "<li>May burn a building(<span style=\"text-decoration: underline;\" onClick=\"fireball=fireball-1;$(this).closest('li').hide();\">Set on fire!</span>)</li>";
                }

                return str + '</ul>';

            case 'gipsy':
                str = 'Gipsy <ul>';

                str += "<li>Can choose to use it\'s power (<span style=\"text-decoration: underline;\" onClick=\"medium=true;$(this).closest('li').hide();\">Channel the dead</span>)</li>";
        
                return str + '</ul>';

            case 'manipulator':
                str = 'Manipulator <ul>';

                str += "<li>Divide the players in 2 obvious groups of the same size (like male/female; old/young, married/single)</li>";
        
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

            case 'lovers':
                return $('#werewolvesImg')?.parent().html().replaceAll('werewolves', 'lovers');

            default:
                return $('#' + name + 'Img')?.clone() || '';
        }
    },
};