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

    //prompt to user get the character types

    var useUpperCaseCharacters = confirm("would you like to use upper case characters?");
      if (useUpperCaseCharacters){
        characterSet += upperCaseCharacters;
      } 

    var useLowerCaseCharacters = confirm("would you like to use lower case characters?");
      if(useLowerCaseCharacters){
        characterSet += lowerCaseCharacters;
    }

    var useSymbols = confirm("would you like to use symbols characters?");
      if (useSymbols){
        characterSet += symbols;
      } 

    var useNums = confirm("would you like to use numbers?");
      if (useNums){
        characterSet += nums;
      }

     // reset password 

     var password = "";

     // Check if the user selected at least one charater type

      if (characterSet === ""){
      alert("You must select at least one option (uppercase, lowercase, symbols, or numbers).")
      return generatePassword();
      }


    return password;
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
