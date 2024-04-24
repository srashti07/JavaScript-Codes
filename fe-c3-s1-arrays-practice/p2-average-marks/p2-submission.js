
let studentMarks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
//Calculate the average of array of marks passed as parameter
function calculateAverage(studentMarks) {
    let sum = 0;
    let count = 0;
    for(let i of studentMarks){
       sum = sum + i
       count++;
    }
    let averageMarks = (sum / count);
    return averageMarks;
}   

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    calculateAverage
}