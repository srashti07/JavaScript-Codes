/*
    Practice 3 - Fibonacci Series for First 10 numbers
*/ 

// Declare and initialize variable to store count value.
let count = 10;

// Declare and initialize variables to store the first two values of the fibonacci series.
let n1 = 0;
let n2 = 1;

// Display the first two values of the fibonacci series.
console.log("n1:", n1);
console.log("n2:", n2);

// Write `for` loop to generate rest of the values in the fibonacci series.
for (let i = 3; i <= count; i++) {
    let n3 = n1 + n2;
    console.log("n" + i + ":", n3);
    n1 = n2;
    n2 = n3;
}