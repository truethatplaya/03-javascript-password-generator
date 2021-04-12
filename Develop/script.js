// array of characters
var numbers = "1234567890";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!()*+,-./:~";
var passwordLength = 0;

// boolan vaules to determine if the user wants to use numbers, lowerLetters, upperLetters, or specialChar
var useNumbers;
var useLower;
var useUpper;
var useSpecial;
var getLength = false;

// made each prompt an object and put into an array
var numberPrompt = {
  name: "numberPrompt",
  prompt: "Do you want numbers included? If so, type 'Y'.",
};
var lowerPrompt = {
  name: "lowerPrompt",
  prompt: "Do you want lowercase letters included? If so, type 'Y'.",
};
var upperPrompt = {
  name: "upperPrompt",
  prompt: "Do you want uppercase letters included? If so, type 'Y'.",
};
var specialPrompt = {
  name: "specialPrompt",
  prompt: "Do you want special characters inlcuded? If so, type 'Y'.",
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
var password = [];

// STARTER CODE
var generateBtn = document.querySelector("#generate");

// This makes all the prompts start running and asks for a value from the user
function getPrompts(prompts) {
  debugger;
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
        if (upperResponse.toUpperCase() === "Y"){   
          useUpper = true;
      }

      } else if (item.name === "specialPrompt") {
        var specialResponse = prompt(item.prompt);
        if (specialResponse.toUpperCase() === "Y"){
          useSpecial = true;
      }

    } else if (item.name === "lengthPrompt") {
      getLength = true;
      var lengthResponse = runlengthPrompt(); 
    }
  }

  getPasswordCharacters(useNumbers, useLower, useUpper, useSpecial, lengthResponse); 
}

function getPasswordCharacters(useNumbers, useLower, useUpper, useSpecial, lengthResponse) {
  debugger;
  var potentialPasswordChars = '';

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

  var password = getRandomString(potentialPasswordChars, lengthResponse);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
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

function getRandomValue(array) {
  debugger;
  const min = 0; // an integer
  const max = array.length; // guaranteed to be an integer

  /*
   Math.random() will return a random number [0, 1) Notice here that it does not include 1 itself
   So basically it is from 0 to .9999999999999999

   We multiply this random number by the difference between max and min (max - min). Here our min is always 0.
   so now we are basically getting a value from 0 to just less than array.length
   BUT we then call Math.floor on this function which returns the given number rounded down to the nearest integer
   So Math.floor(Math.random() * (max - min)) returns 0 to array.length - 1
   This gives us a random index in the array
  */
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;

  // then we grab the item that is located at that random index and return it
  return array[randomIndex];
}

function getRandomString(charset, length) {
  debugger;
  var result = '';
  for (var i = 0; i <= length; i++) {
    result += getRandomValue(charset);
  }
  return result;
}


//02.1.1 - generatePassword is going to give the user the prompts to type in Yes or No to the questions
function generatePassword() {
  console.log(typeof length);
}
//STARTER CODE
//02 - once the generateBtn is clicked then the writePassword function is going to run
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// BELOW functions are working
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(getRandomLower());

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(getRandomUpper());

// //I called this random number from the character code
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(getRandomNumber());

// //I called this special variable from the local scope ----------
// function getRandomSpecial() {
//   return specialChar[Math.floor(Math.random() * specialChar.length)];
// }
// console.log(getRandomSpecial());

// if (getRandomSpecial === "Y" && passwordLength > 0) {
//   index = useSpecial[Math.floor(Math.random() * specialChar.length)];
// }

//I called this test variable from the global scope
// function getRandomTest() {
//   return test[Math.floor(Math.random() * test.length)];
// }
// console.log(getRandomTest());

// 01 - STARTER CODE - generateBtn is clicked, then writePassword function is activated
// generateBtn.addEventListener("click", getPrompts(prompts));
