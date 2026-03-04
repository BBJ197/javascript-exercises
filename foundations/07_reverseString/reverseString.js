const reverseString = function(String) {
    let reversedString = ""
    for (let i = 0; i < String.length; i++){
        let j = String.length - 1 - i
        reversedString += String[j]
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
