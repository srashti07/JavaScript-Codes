/*
    Practice 2 - Count Days for a Given Month and Year​
*/

// Declare and initialize variables to store month and year values
let month = 2; // For example, February (2nd month)
let year = 2008;

// Declare a variable to store day count​.
let dayCount;

// Write the logic used to check the number of days in the month using switch case
switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        dayCount = 31;
        break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        dayCount = 30;
        break;
    case 2: // February
        // Check for leap year to determine the days in February
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            dayCount = 29; // Leap year
        } else {
            dayCount = 28; // Non-leap year
        }
        break;
    default:
        dayCount = -1; // Invalid month
        break;
}

// Display the value of day count
if (dayCount === -1) {
    console.log("Invalid month entered.");
} else {
    console.log(`Number of days in month ${month} of year ${year} is: ${dayCount}`);
}