/*
    Practice 1 - Find the Largest Number​
*/

// Declare and initialize variables
let num1= 30;
let num2= 45;
let num3= 50;

// Declare a variable to store the resultant largest number
let largestNum;
// Write logic to find the largest number using nested-if
if (num1 >= num2) {
    if (num1 >= num3) {
        largestNum = num1;
    } 
    else {
        largestNum = num3;
    }
} 
else {
    if (num2 >= num3) {
        largestNum = num2;
    } 
    else {
        largestNum = num3;
    }
}

// Display the largest number
console.log(`Largest Number is ${largestNum}`);

// Write logic to find the largest number using ternary operator
let largestNumber = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;

// Display the largest number
console.log(`Largest Number is ${largestNumber}`);