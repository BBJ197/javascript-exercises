const palindromes = function (str) {
    let reverced = ""
    for (let i=0; i<str.length; i++){
        reverced = reverced + str[str.length - i - 1]
    }
    if (str === reverced){
        return true
    }
    else {
       return false
    }
};

// Do not edit below this line
module.exports = palindromes;
