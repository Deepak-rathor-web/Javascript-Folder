var scores = [];

function addScore(scores, newScore) {
    scores.push(newScore);
    return scores;
}

var removeScore = function(scores, scoreToRemove) {
    return scores.filter(function(s) {
        return s !== scoreToRemove;
    });
};

var isHighScore = function(score) {
    return score >= 80;
};

function calculateTotalScore(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum;
}

function applyBonus(scores, bonus = 5) {
    return scores.map(function(s) {
        return s + bonus;
    });
}

function addMultipleScores(scores, ...newScores) {
    for (var i = 0; i < newScores.length; i++) {
        scores.push(newScores[i]);
    }
    return scores;
}

addScore(scores, 70);
addMultipleScores(scores, 80, 90);
console.log(scores);
