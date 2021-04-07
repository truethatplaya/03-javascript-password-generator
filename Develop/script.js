function generatePassword() {
  lengthPassword();
  lower();
  upper();
  number();
  special();
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = getRandomNumber;
var upper = getRandomUpper;
var lower = getRandomLower;
var special = getRandomSpecial;
var passwordLength = 0;
// var lowercasePrompt = "";

// Write password to the #password input
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumber());

function getRandomSpecial() {
  var special = "!()*+,-./:~";
  return special[Math.floor(Math.random() * special.length)];
}

console.log(getRandomSpecial());

// function writePassword() {
//   var password = generatePassword();
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
