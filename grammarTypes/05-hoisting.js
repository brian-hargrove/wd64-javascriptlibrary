/*
* **************
! HOISTING
* **************

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
        - Only the declaration is pulled up, NOT the assignment
*/

// console.log(hoistedVar);

// console.log(`How JS see hoistedVar: `,typeof hoistedVar);

// var hoistedVar = 'using var';
//let hoistedVar = 'using let';

//console.log(noVariable);

//? Hoisting in a Function
// This process is considered the same within in a function. On the first pass, it reads it, pushes the declaration to the top and then excecuts them in the order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the gloabl scope";
    console.log('Prior to declaring', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}
testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a fucntion or global scope. This makes it clear how it should be handled.

//? Using LET
//THe keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = "using Let";
// This throws a ReferenceError due to ES6 not accepting variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting function
// Function declaration:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}



// var declaration;  // without assignment
// console.log(usage);

// declaration = 10;  // assigning our variable
// console.log(usage);

// var usage = declaration + 10;

// console.log(usage);