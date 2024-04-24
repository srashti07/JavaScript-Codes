/*
    Challenge 1 - Check Eligibility
*/

// Declare variables to store age, gender, isUSCitizen (true/false), and statePageant values
let age = 25; // Example age
let gender = 'female'; // Example gender, should be 'female' or 'male'
let isUSCitizen = true; // Example citizenship status, true or false
let statePageant = 'New York'; // Example state pageant status

// Write logic using if..else statements to check and display the eligibility status
if (gender === 'female' && age > 18 && age < 28 && isUSCitizen && statePageant) {
    console.log("Eligible");
} 
else {
    console.log("Not Eligible");
}