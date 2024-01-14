// Assignment code here

  //character types

var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var symbols = "!@#$%&*()?+-=_<>";


  // function to generate password

var generatePassword = function() {
  var passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if (passwordLength < 8){
      alert("The password has to be at least 8 characters");
      return generatePassword();
    } else if (passwordLength > 128){
      alert("The password cannot be more than 128 characters");
      return generatePassword();
    }

    //variable to append the options picked by the user
    var characterSet = "";

  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
