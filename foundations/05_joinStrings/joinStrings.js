/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

const { lastName, thisYear } = require("./joinStrings-example");

// Add your code right below, good luck!
let firstName = "Carlos";
// const lastName = "Stevenson";
// let thisYear = 1965;  // would have used this 2 lines of codes if there weren't the first code 
let birthYear = 1947;

let fullName = firstName + " " + lastName
let age = thisYear - birthYear

// let greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " Years old.";
let greeting = "Hello! My name is " + fullName + " and I am " + age + " Years old.";


console.log (greeting)


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
