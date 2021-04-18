// array of characters
var numbers = "1234567890";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!()*+,-./:~";

// boolan vaules to determine if the user wants to use numbers, lowerLetters, upperLetters, or specialChar
var useNumbers = false;
var useLower = false;
var useUpper = false;
var useSpecial = false;
var passwordLength = 0;
var getLength = false;

// made each prompt an object and put into an array
var numberPrompt = {
  name: "numberPrompt",
  prompt: "Do you want numbers included? Type 'Y' for yes, and 'N' for no.",
};
var lowerPrompt = {
  name: "lowerPrompt",
  prompt:
    "Do you want lowercase letters included? Type 'Y' for yes, and 'N' for no.",
};
var upperPrompt = {
  name: "upperPrompt",
  prompt:
    "Do you want uppercase letters included? Type 'Y' for yes, and 'N' for no.",
};
var specialPrompt = {
  name: "specialPrompt",
  prompt:
    "Do you want special characters inlcuded? Type 'Y' for yes, and 'N' for no.",
};
var lengthPrompt = { name: "lengthPrompt", prompt: this.runlengthPrompt() };

var promptsArray = [
  //items for prompts
  numberPrompt,
  lowerPrompt,
  upperPrompt,
  specialPrompt,
  lengthPrompt,
];

// STARTER CODE
var generateBtn = document.querySelector("#generate");

// This makes all the prompts start running and asks for a value from the user
function getPrompts(prompts) {
  if (!prompts) {
    prompts = promptsArray;
  }

  for (var i = 0; i < prompts.length; i++) {
    var item = prompts[i];

    if (item.name === "numberPrompt") {
      var numberResponse = prompt(item.prompt);
      if (numberResponse.toUpperCase() === "Y") {
        useNumbers = true;
      }
    } else if (item.name === "lowerPrompt") {
      var lowerResponse = prompt(item.prompt);
      if (lowerResponse.toUpperCase() === "Y") {
        useLower = true;
      }
    } else if (item.name === "upperPrompt") {
      var upperResponse = prompt(item.prompt);
      if (upperResponse.toUpperCase() === "Y") {
        useUpper = true;
      }
    } else if (item.name === "specialPrompt") {
      var specialResponse = prompt(item.prompt);
      if (specialResponse.toUpperCase() === "Y") {
        useSpecial = true;
      }
    } else if (item.name === "lengthPrompt") {
      getLength = true;
      var lengthResponse = runlengthPrompt();
      passwordLength = lengthResponse;
    }
  }

  validatePrompts();
  getPasswordCharacters(
    useNumbers,
    useLower,
    useUpper,
    useSpecial,
    passwordLength
  );
}

//this function will run through the prompts to make sure the password is between 8-128 characters
function runlengthPrompt() {
  if (!getLength) {
    return;
  }

  lengthPrompt = Number(
    prompt(
      "How many characters would you like your password to be? Must be between 8-128."
    )
  );

  if (isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128)
    lengthPrompt = Number(
      prompt(
        "Length must be 8-128 characters. How many characters would you like your password to be?"
      )
    );

  return lengthPrompt;
}

function getPasswordCharacters(
  useNumbers,
  useLower,
  useUpper,
  useSpecial,
  passwordLength
) {
  var potentialPasswordChars = "";

  if (useUpper) {
    potentialPasswordChars = upperLetters;
  }

  if (useLower) {
    potentialPasswordChars += lowerLetters;
  }

  if (useNumbers) {
    potentialPasswordChars += numbers;
  }

  if (useSpecial) {
    potentialPasswordChars += specialChars;
  }

  generateAndResetPassword(potentialPasswordChars, passwordLength);
}

function generateAndResetPassword(potentialPasswordChars, passwordLength) {
  var password = generatePassword(potentialPasswordChars, passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  resetDefaultValues();
}

//if the prompts are all false then the user will be alerted and a new set of prompts will be dislayed
function validatePrompts() {
  if (!useNumbers && !useLower && !useUpper && !useSpecial) {
    alert("You must select one character type to generate a password.");
    getPrompts();
  }
}

function getRandomValue(charSet) {
  var min = 0; // an integer
  var max = charSet.length; // guaranteed to be an integer

  var randomIndex = Math.floor(Math.random() * (max - min)) + min;

  // then we grab the item that is located at random index and return it
  return charSet[randomIndex];
}

// this function "generatePassword" is going to generate the random password from the values we obtained from the prompts
function generatePassword(charSet, length) {
  var result = "";
  for (var i = 0; i <= length; i++) {
    result += getRandomValue(charSet);
  }
  return result;
}

// this will reset the values back to default.
function resetDefaultValues() {
  useNumbers = false;
  useLower = false;
  useUpper = false;
  useSpecial = false;
  passwordLength = 0;
  getLength = false;
}
