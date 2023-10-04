// Assignment code here
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [".", ":", ";", "*", "^", "$", "&", "%", "!", "?"];

var characterDict = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = [];
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // TODO: TAKING LENGTH CHOICE
  var lengthChoice = window.prompt(
    "How many characters would you like your password to be?"
  );
  // TODO: HANDLING LENGTH CHOICE
  if (lengthChoice < 8) {
    window.alert("A strong password needs to be at least 8 characters!");
    // Returns back at the beginning after scolding user for too short
    return;
  } else if (lengthChoice > 128) {
    window.alert("That's way too long!");
    return;
  } else {
    var passwordLength = lengthChoice;
    console.log("This password is " + lengthChoice + " characters long!");
  }

  // TODO: TAKING LOWERCASE CHOICE
  var lowerChoice = window.confirm(
    "Would you like lowercase characters included?"
  );
  // TODO: HANDLING LOWERCASE CHOICE
  if (lowerChoice) {
    characterDict = characterDict.concat(...lower);
    console.log("Current usable characters: " + characterDict);
  }
  // TODO: TAKING UPPERCASE CHOICE
  var upperChoice = window.confirm(
    "Would you like uppercase characters included?"
  );
  // TODO: HANDLING UPPERCASE CHOICE
  if (upperChoice) {
    characterDict.push(...upper);
    console.log("Current usable characters: " + characterDict);
  }
  // TODO: TAKING NUMBERS CHOICE
  var numberChoice = window.confirm("Would you like numbers included?");
  // TODO: HANDLING NUMBER CHOICE
  if (numberChoice) {
    characterDict.push(...numbers);
    console.log("Current usable characters: " + characterDict);
  }
  // TODO: TAKING SPECIAL CHARACTERS CHOICE
  var specialChoice = window.confirm(
    "Would you like special characters included?"
  );
  // TODO: HANDLING NUMBER CHOICE
  if (specialChoice) {
    characterDict.push(...specialCharacters);
    console.log("Current usable characters: " + characterDict);
  }
  for (var i = 0; i <= passwordLength - 1; i++) {
    var randomIndex = Math.floor(Math.random() * characterDict.length);
    password.push(characterDict[randomIndex]);
  }
  // Turns password array into a string
  password = password.toString();
  // Cleans password string by removing commas
  password = password.replaceAll(",", "");
  console.log(password);
  // Removes placeholder text
  passwordText.setAttribute("placeholder", password);
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
