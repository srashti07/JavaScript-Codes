
let marks = [45,58,36,78,96,85,36,85,42,69];
//Sort the marks from an array of marks passed as parameter
function sortMarks(marks){
   
    for(i =0; i<marks.length -1;i++){
        for(j=0; j< marks.length - 1 -i; j++){
            if (marks[j] > marks[j+1]){
                var temp = marks[j];
                marks[j] = marks[j+1];
                marks[j+1] = temp;
            }
        }
    } 
    return marks;
    

}


// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
    sortMarks
}
