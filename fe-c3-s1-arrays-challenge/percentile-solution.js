//function to sort the array of marks passed as parameter
function sortArray(marks) {
  for (let i = 1; i < marks.length; i++) {
      for (let j = 0; j < marks.length - i; j++) {
          if (marks[j] > marks[j + 1]) {
              let temp = marks[j];
              marks[j] = marks[j + 1];
              marks[j + 1] = temp;
          }
      }
  }
  return marks;
}

//function to compute and return the percentile array
function calculatePercentileArray(marks) {
  marks = sortArray(marks);
  let percentile = [];
  
  for(let i=0;i<marks.length;i++){
      let count =0;
      for(let j=0;j<marks.length;j++){
          if(marks[j]<marks[i]){
              count++;
          }
      }
      percentile[i] = (count / marks.length) * 100;
      percentile[i] = Math.round(percentile[i] );
   
  }
  return percentile;
}
  
// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
sortArray,
calculatePercentileArray
}