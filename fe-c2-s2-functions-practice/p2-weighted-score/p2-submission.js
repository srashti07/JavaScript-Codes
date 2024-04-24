//Write solution code
// Function to calculate total weighted score
function calculateTotalWeightedScore(assignmentsScore, projectsScore, quizScore, midTermScore, finalExamScore) {
    const assignmentWeight = 10;
    const projectWeight = 35;
    const quizWeight = 10;
    const midTermWeight = 15;
    const finalExamWeight = 30;
  
    const assignmentWeightedScore = (assignmentWeight / 100) * assignmentsScore;
    const projectWeightedScore = (projectWeight / 100) * projectsScore;
    const quizWeightedScore = (quizWeight / 100) * quizScore;
    const midTermWeightedScore = (midTermWeight / 100) * midTermScore;
    const finalExamWeightedScore = (finalExamWeight / 100) * finalExamScore;
  
    const overallWeightedScore = assignmentWeightedScore + projectWeightedScore + quizWeightedScore + midTermWeightedScore + finalExamWeightedScore;
  

    console.log("Assessment Type   Weighted Score");
    console.log("Assignments       ", assignmentWeightedScore.toFixed(2));
    console.log("Projects          ", projectWeightedScore);
    console.log("Quizzes           ", quizWeightedScore);
    console.log("Mid Term          ", midTermWeightedScore.toFixed(2));
    console.log("Final Exam        ", finalExamWeightedScore);
    console.log("\nThe Total Weighted Score is:", overallWeightedScore);
  
    return overallWeightedScore; 
  }
  
  const assignmentScore = 97;
  const projectScore = 82;
  const quizScore = 60;
  const midTermScore = 75;
  const finalExamScore = 80;
  
  
  calculateTotalWeightedScore(assignmentScore, projectScore, quizScore, midTermScore, finalExamScore);