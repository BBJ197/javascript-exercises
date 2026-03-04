const convertToCelsius = function(Fahrenheit) {
  return (Fahrenheit - 32) * (5/9)
};

const convertToFahrenheit = function(Celsius) {
  return ((Celsius * (9/5)) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
