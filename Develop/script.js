var askForNumbers
var askForLetters
//keep going

var test = "a,b,c,d,e,f,g,h";

// Assignment Code
var generateBtn = document.querySelector("generate");
var numberEl = document.querySelector("number");
var upperEl = document.querySelector("upper");
var lowerEL = document.querySelector("lower");
var specialEl = document.querySelector("special");
var lengthEl = document.querySelector("length");
var resultEl = document.querySelector("result");

// function writePassword() {
//   var password = generatePassword(lower, uppper, number, special, length); {

}
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

function lengthPassword() {
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  var passwordLength = length;
  console.log(typeof length);
}

// var caseLower = prompt("Would you like lowercase characters in your password?");
// var caseUpper = prompt("Would you like uppercase characters in your password?");

// BELOW functions are working
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

//I called this random number from the character code
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

//I called this special variable from the local scope
function getRandomSpecial() {
  var special = "!()*+,-./:~";
  return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());

//I called this test variable from the global scope
function getRandomTest() {
  return test[Math.floor(Math.random() * test.length)];
}
console.log(getRandomTest());
