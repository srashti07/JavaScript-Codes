// copy the solution code from `Practice 1 - Calculate Area` 
// from the sprint `Implement Modular Programming using Functions`
function calculateAreaOfSquare(side) {
   if (arguments.length < 1) {
       return 'Insufficient Input';
   } else if (typeof side !== 'number') {
       return 'Invalid Input Type, Side Should Be A Number !!';
   } else if (side <= 0) {
       return 'Incorrect Input, Side Cannot Be Zero or Negative !!';
   } else {
       return side * side;
   }
} 

function calculateAreaOfCircle(radius) {
   if (arguments.length < 1) {
       return 'Insufficient Input';
   } else if (typeof radius !== 'number') {
       return 'Invalid Input Type, Radius Should Be A Number !!';
   } else if (radius <= 0) {
       return 'Incorrect Input, Radius Cannot Be Zero or Negative !!';
   } else {
       return 3.14 * radius * radius;
   }
}

function calculateAreaOfRectangle(length, breadth) {
   if (arguments.length < 2) {
       return 'Insufficient Inputs';
   } else if (typeof length !== 'number' || typeof breadth !== 'number') {
       return 'Invalid Input Types, Length and Breadth Should Be Numbers !!';
   } else if (length <= 0 || breadth <= 0) {
       return 'Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!';
   } else {
       return length * breadth;
   }
}

// do not delete the below code, it is written to export the functions to be tested
module.exports = {
   calculateAreaOfCircle,
   calculateAreaOfRectangle,
   calculateAreaOfSquare
}