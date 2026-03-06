const add = function(num1, num2) {
	return(num1 + num2)
};

const subtract = function(num1, num2) {
	return(num1 - num2)
};

const sum = function(array) {
  let total = 0;
	for (let i in array){
    total = total + array[i]
  }
  return total
};

const multiply = function(array) {
  let multiplicity = 0;
	for (let i in array){
    multiplicity = multiplicity * array[i]
  }
  return multiplicity
};

const power = function(num1, num2) {
	return(num1 ** num2)
};

const factorial = function(num) {
  if (num === 1){
    return 1;
  }
  return(num * factorial(num -1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
