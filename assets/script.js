
//DECLARE VARIABLES:
  var passwordCriteria = {
    length: 0,
    lowercase: 0,
    uppercase: 0,
    numeric: 0, 
    specialChar: 0
  };
  var possibilities = [];

  var uppercaseLetterOptions = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseLetterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
 
  var specialCharOptions = ['!','?','@','#','$','%','&','*','<','>','~','^','+','-'];
 
//Get password length 
var getLengthOfPassword = function () {
  //Ask what password length will be : 8-128 characters
  passwordCriteria.length = window.prompt("What is the length of your desired password? Choose a number 8 to 128.");

  //convert string to an integer
  passwordCriteria.length = parseInt(passwordCriteria.length);

  //conditional statement to receive valid answer
  if (passwordCriteria.length < 8 || passwordCriteria.length > 128) { 
    alert("Invalid response. Please enter information again.");
    return getLengthOfPassword();
  }
  else {
    alert("Your password will be " + passwordCriteria.length + " characters long.");
  }
};

//lowercase validation- 
var getLowercase = function() {
  passwordCriteria.lowercase = confirm("Would you like LOWERCASE letters in your password? \nPress Ok for YES. Press CANCEL for NO.");
  // gives true or false
  console.log("I would like lowercase letters: " + passwordCriteria.lowercase);
};

//uppercase validation
var getUppercase = function() {
    passwordCriteria.uppercase = confirm("Would you like UPPERCASE letters in your password? \nPress Ok for YES. Press CANCEL for NO.");
  // gives true or false
  console.log("I would like uppercase letters: " + passwordCriteria.uppercase);
};

//numeric validation
var getNumeric = function() {
  passwordCriteria.numeric = confirm("Would you like NUMBERS in your password? \nPress Ok for YES. Press CANCEL for NO.");
  // gives true or false
  console.log("I would like numbers: " + passwordCriteria.numeric);
};

//special characters validation
var getSpecialChar = function() {
  passwordCriteria.specialChar = confirm("Would you like SPECIAL CHARACTERS in your password? \nPress Ok for YES. Press CANCEL for NO.");
  // gives true or false
  console.log("I would like special characters: " + passwordCriteria.specialChar);
};

var getCharacterType = function () { 
  alert("Let's choose password character types!");
    getLowercase();
    getUppercase();
    getNumeric();
    getSpecialChar();
    
    //Make sure at least one of the options was selected
    if (passwordCriteria.lowercase === false && 
      passwordCriteria.uppercase === false && 
      passwordCriteria.numeric === false && 
      passwordCriteria.specialChar === false) {
        alert("You must select yes for at least one of the following options: lowercase, uppercase, numeric, and/or special characters. Please try again.");
        getCharacterType();
      }
};

//Get all password Criteria   
var getPasswordCriteria = function() {
  getLengthOfPassword ();
    console.log("Your password will be " + passwordCriteria.length + " characters long.");

  getCharacterType();
    console.log(passwordCriteria.lowercase + " for lowercase");
    console.log(passwordCriteria.uppercase + " for uppercase.");
    console.log(passwordCriteria.numeric + " for numeric.");
    console.log(passwordCriteria.specialChar + " for special characters.");
};

//Generate the unique password.
var generatePassword = function () {
  getPasswordCriteria();

  //Start building up the array of possiblities- it will add to the array as we go through the different options
  var possibilities = [];

  if(passwordCriteria.lowercase) { //equals true
    possibilities = possibilities.concat(lowercaseLetterOptions);
  } 
  if(passwordCriteria.uppercase) {
    possibilities = possibilities.concat(uppercaseLetterOptions);
  }
  if (passwordCriteria.numeric) {
    possibilities = possibilities.concat(numberOptions);
  }
  if (passwordCriteria.specialChar) {
    possibilities = possibilities.concat(specialCharOptions);
  }

  //create password variable, go through loop to choose a random spot in the array, loop the length of the password requested at beginning. Push those random letters through to password
  var password= []; 
  for (var i =0; i < passwordCriteria.length; i++) { //start at 0
    var possibleChar = Math.floor(Math.random() * possibilities.length); //this gives you a random index
    password.push(possibilities[possibleChar]); //need to push this on to password

  }
  //turn array of string into string then put string onto page - return password
  console.log(password);
  password = password.join('');
  console.log(password);
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
