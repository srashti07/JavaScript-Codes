//Write solution code 
// Function to calculate the area of a square
function calculateAreaOfSquare(side) {
    return side * side;
}
  
// Function to calculate the area of a circle
function calculateAreaOfCircle(radius) {
    return 3.14 * radius * radius;
}
  
// Function to calculate the area of a rectangle
function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
}
  
console.log("Area of the square:", calculateAreaOfSquare(5));
console.log("Area of the circle:", calculateAreaOfCircle(3.5));
console.log("Area of the rectangle:", calculateAreaOfRectangle(7,4));