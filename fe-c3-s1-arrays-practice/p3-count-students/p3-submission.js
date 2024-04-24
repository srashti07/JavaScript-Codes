
let studentMarks = [80, 39, 48, 18, 65, 77, 54, 23, 81, 94];
//Find the count of students who have scored marks>=40 from tha array of marks passed as parameter 
function findCount(studentMarks){
    let count = 0;
    for( let i=0;i<studentMarks.length;i++){
       if(studentMarks[i] >= 40){
        count++;
       } 
    }
    return count;

}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    findCount
}