/*
    Challenge 2 - Validate Values
*/

let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
let firstNameValidation =
  typeof firstName !== "string"
    ? "First Name value must be of type string"
    : firstName === undefined || firstName.trim().length === 0
    ? "First Name value must not be undefined"
    : "First Name is valid";

// Provide solution code here for Validating LastName
let lastNameValidation =
  typeof lastName !== "string"
    ? "Last Name value must be of type string"
    : "Last Name is valid";

// Provide solution code here for Validating Age
if(typeof age != "number"){
    console.log("Age must be of type Number")
}
else if (age === undefined || age < 18 || age > 60){
    console.log("Age value should be between 18 to 60");
}
else{
    console.log("Age is valid");
}

// Provide solution code here for Validating isMarried
let isMarriedValidation =
  typeof isMarried !== "boolean"
    ? "IsMarried value must be of type Boolean"
    : "IsMarried is valid";

// Provide solution code here for Validating City
let cityValidation =
  typeof city !== "string" ? "City value must be of type String" : "City is valid";


// Provide solution code here for Validating State
let stateValidation =
  typeof state !== "string" ? "State value must be of type String" : "State is valid";
 
// Provide solution code here for Validating Postal Code
let postalCodeValidation =
  typeof postalCode !== "string" ||
  postalCode === undefined ||
  postalCode.trim().length === 0
    ? "Postal Code value must not be undefined, Postal Code value must be of type String"
    : "Postal Code is valid";

// Displaying validation messages
console.log(firstNameValidation);
console.log(lastNameValidation);
//console.log(ageValidation);
console.log(isMarriedValidation);
console.log(cityValidation);
console.log(stateValidation);
console.log(postalCodeValidation);