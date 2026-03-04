// const filterNumber = function(arr, num) {
    
// };

const removeFromArray = function(arr, num) {
    const newArr = arr.filter(item => item != num)
    return(newArr)
};

// Do not edit below this line
module.exports = removeFromArray;
