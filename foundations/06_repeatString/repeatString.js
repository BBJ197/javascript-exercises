const repeatString = function (String, numberOfTimes) {
    let repeatedString = ""
    for (let i = 1; i <= numberOfTimes; i++){
        repeatedString = repeatedString + String
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
