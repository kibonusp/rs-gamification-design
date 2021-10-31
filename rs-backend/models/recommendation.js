const mongoose = require('mongoose');

/*
Gamification designs (Toda et al.) applied to storyboards:
    • SF (Storyboard Fictional): 1,
    • SP (Storyboard Personal): 2,
    • SPF (Storyboard Performance): 3,
    • SE (Storyboard Ecological): 4,
    • SS (Storyboard Social): 5

positive association: 1
negative association: -1
*/

module.exports.recommendationTable = {
    "philantropist": {
        "preference": [0],
        "accomplishment": [0]
    },
    "achiever": {
        "preference": [0],
        "accomplishment": [3, 5]
    },
    "player": {
        "preference": [-5, 2],
        "accomplishment": [4, 5]
    },
    "free spirit": {
        "preference": [-5],
        "accomplishment": [0]
    },
    "socializer": {
        "preference": [-3, 5],
        "accomplishment": [1, 2, 5]
    },
    "disruptor": {
        "preference": [5],
        "accomplishment": [0]
    }
}