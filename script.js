// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {


    //prompts user to make selection of necessary criteria to include in password

    var needsLowercase = confirm("Select 'OK' to include lowercase letters. Select cancel to omit.");
    var needsUppercase = confirm("Select 'OK' to include uppercase letters. Select cancel to omit.");
    var needsNumeric = confirm("Select 'OK' to include numbers. Select cancel to omit.");
    var needsSpecial = confirm("Select 'OK' to include special characters. Select cancel to omit.")

    //  at least one character type should be selected
    if (!needsLowercase && !needsUppercase && !needsNumeric && !needsSpecial) {
      alert("Please choose at least one character to generate a password.")
      return
    }

    //  password length should be between 8 and 128 (and exlude any other inputs)
    var passwordLength = prompt("How many characters does your password need? (Please choose a number between 8 and 128)")
    if ((!(passwordLength <= 128)) || (!(passwordLength >= 8))) {
      alert("Please choose a number between 8 and 128.")
      return
    }



    //Different lists of possible characters
    specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    uppercaseList = lowercaseList.map(function (x) { return x.toUpperCase(); })

    //creates an array to randomly choose the number of characters from the prompt, making sure that all password criteria are met
    var unscrambledArray = []

    //creates an array of the characters selected for use
    var possibleCharacters = []

    // adds allowable characters to a master list *
    // checks to make sure all 4 criteria are met (assuming the user chose 'Ok' on all 4)
    if (needsSpecial) {
      possibleCharacters = possibleCharacters.concat(specialList)

      var randomSpecial = specialList[Math.floor(Math.random() * specialList.length)]
      unscrambledArray.push(randomSpecial)
    }

    if (needsLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseList)

      var randomLowercase = lowercaseList[Math.floor(Math.random() * lowercaseList.length)]
      unscrambledArray.push(randomLowercase)
    }

    if (needsUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseList)

      var randomUppercase = uppercaseList[Math.floor(Math.random() * uppercaseList.length)]
      unscrambledArray.push(randomUppercase)
    }

    if (needsNumeric) {
      possibleCharacters = possibleCharacters.concat(numberList)

      var randomNumeric = numberList[Math.floor(Math.random() * numberList.length)]
      unscrambledArray.push(randomNumeric)
    }

    // specialList.concat(numberList.concat(lowercaseList.concat(uppercaseList)))
    for (x = unscrambledArray.length; x < passwordLength; x++) {


      // fills the rest of the array with randomly selected characters
      var randomCharacter = possibleCharacters[(Math.floor(Math.random() * possibleCharacters.length))]
      unscrambledArray.push(randomCharacter)

    }
    // scrambles the array so that the order isn't predictable
    scrambledArray = []
    for (x = 0; x < passwordLength; x++) {
      var spotSelect = Math.floor(Math.random() * unscrambledArray.length)
      scrambledArray.push(unscrambledArray[spotSelect])
      unscrambledArray.splice(spotSelect, 1)
    }

    //transforms the array into a string to output
    passwordOutput = scrambledArray.join("")
    alert("Password: " + passwordOutput)

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
debugger