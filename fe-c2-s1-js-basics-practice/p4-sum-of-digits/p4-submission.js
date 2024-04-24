/*
    Practice 4 - Sum the Digits of a Number
*/

// Declare and initialize variable to store the value whose digits need to be added up.
let num = 4386;

// Declare and initialize variable to store the sum value.
let sum = 0;

// Write `while` loop to calculate sum of digits.
while (num > 0) {
    // Fetch the digit at unit position
    let digit = num % 10;

    // Update value of num to get the number without the last digit
    num = (num - digit) / 10;

    // Add the digit fetched to the current value of sum variable
    sum += digit;
}

// Display the value of sum.
console.log("Sum of Digits of 4386 = ", sum);
