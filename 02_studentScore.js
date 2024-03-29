/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/
function calculateGrade(studentscore)
{
    switch (true) {
        case (studentscore>=90 && studentscore<=100):
                           return `A`;
        case (studentscore>=80 && studentscore<90):
                           return `B`;
        case (studentscore>=70 && studentscore<80):
                           return `C`;
        default:
           return `No grade`;
    }
}
let studentscore=100;
let result=calculateGrade(studentscore);
console.log(result);