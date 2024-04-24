/*
    Challenge 3 - Know Your Lucky Number
*/

// Declare and initialize variable to store date in `mmddyyyy` format
let dateValue = '05132001';

// Declare variable to store single digit sum value
let singleDigitSum = 0;

// Write nested loop to calculate single digit sum of the date stored in `mmddyyyy` format
for (let i = 0; i < dateValue.length; i++) {
    let digit = dateValue.charCodeAt(i) - 48; // Converting character to its numeric value

    singleDigitSum += digit;
}

while (singleDigitSum > 9) {
    let tempSum = 0;
    while (singleDigitSum > 0) {
        tempSum += singleDigitSum % 10;
        singleDigitSum = (singleDigitSum / 10) | 0; // Using bitwise OR operator to truncate decimal places
    }
    singleDigitSum = tempSum;
}

// Display the single digit sum, which is the lucky number based on the date stored
console.log("Your Lucky Number is ", singleDigitSum);