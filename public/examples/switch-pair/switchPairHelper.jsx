function switchPairs(coders) {
    let selectedCoders = getSelectedCoders(coders);
    var pairs = generatePairsTwo(selectedCoders);

    return pairs;
}

function generatePairsTwo(selectedCoders) {
    var indexs = [];
    let len = selectedCoders.length;
    while (indexs.length !== len) {
        let index = generateRodomIndex(len);
        if (indexs.indexOf(index) === -1) {
            indexs.push(index);
        }
    }

    return generatePairsOne(generateCoderList(indexs, selectedCoders));
}

function generateCoderList(indexs, selectedCoders) {
    return indexs.map(function(index) {
        return selectedCoders[index];
    });
}

function generatePairsOne(coders) {
    var pairs = [];
    let len = coders.length;
    for (var i = 0; i < len;) {
        let pair;
        if (coders[i + 1] === undefined) {
            pair = {
                coderOne: coders[i],
                id: i / 2
            };
            i++;
        } else {
            pair = {
                coderOne: coders[i],
                coderTwo: coders[i + 1],
                id: i / 2
            };
            i += 2;
        }
        pairs.push(pair);
    }
    return pairs;
}

function getSelectedCoders(coders) {
    return coders.filter(function(coder) {
        return coder.isSelected;
    });
}

function generateRodomIndex(count) {
    return Math.floor((Math.random() * count));
}

module.exports = {
    switchPairs
};
