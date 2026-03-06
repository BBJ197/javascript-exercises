const findTheOldest = function(array) {
    const oldest = array.sort((a, b) =>  (b.yearOfDeath - b.yearOfBirth) -(a.yearOfDeath - a.yearOfBirth) )
    return(oldest[0])
};

// Do not edit below this line
module.exports = findTheOldest;
