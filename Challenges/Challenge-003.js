//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let grade = 67;

switch(true) {
    case grade >=101:
        console.log(`Your grade of a ${grade} is \"OUTSTANDING"`);
        break;
    case grade >= 89:
        console.log(`Your grade of a ${grade} ia an A`);
        break;
    case grade >= 79:
        console.log(`Your grade of a ${grade} is a B`);
        break;
    case grade >= 66:
        console.log(`Your grade of a ${grade} is a C`);
        break;
    case grade >= 59:
        console.log(`Your grade of a ${grade} is a D`);
        break;
    default:
        console.log(`Your grade of a ${grade} is an F`);
}

