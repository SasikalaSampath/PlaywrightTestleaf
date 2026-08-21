function studentScore(grade){
switch(grade){
case grade >= 90:
    console.log("Grade is A");
    break;
case grade >= 80:
    console.log("Grade is B");
    break;
case grade >= 70:
    console.log("Grade is C");
    break;  
default:
      console.log("Grade is D");   
}}
let grade = 15;
studentScore(grade);