/*
* ***************
!   Variables
* ***************
*/

console.log('hello'); 

// console.log is a debugging tool. it is used to test code.

// variables is name container allows us to store data to refer back to later.

let a = 2;

/*
- let = our KEYWORD
- a = our NAME of our variable
= = is our ASSIGNMENT OPERATOR
2 = is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the abover characters, BUT cannot come first.
    -javascript IS case sensitive - 'hello' and 'Hello', these would be different variables.
    -no spaces are allowed in variable names.
    -camelCase is the best practice for naming.
    -ex:
        let myName = "Brian";
        is easier to rean than
        let myname = Brian;
*/

let startWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startWithDollarSign = "Works";
//let 4startWithNumber = "Breaks";

console.log(startWithLetter,_startingWithUnderscore,$startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/*
* KEYWORDS *

var, let and const

    - var: 'old' keyword for variable. ** we won't be using it as often but is still a viable one to use.
    - let: "new" keyword for variable. (introduced iwht ES6 *newest version of ECMAScript, which is a standrization of JS)
    - const: also "new" keyword that declares an UNCHANGEABLE, or constant variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';

//let function = 1; cannont use reserved words within a variable name - "*function is a reserved word.

/*
* ***************
!   DECLARATIONS & INITIALIZATIONS
* ***************
*/
// Declarations are the LEFT SIDES of the assignment operator
//let x;

// Initializations are the RIGHT SIDE of the assignment operator
//let x = 10

// 10 is our inititalization

let y;
console.log('declaration:', y);

y = 10;
console.log('initialization:', y);

y = 33;
console.log('initialization: ', y);

y=54;
console.log('number',y);

// we've set our variables with our 1st keyword. with each iteration, we have redeclared what it it.

//? const

let today = "Great";
const efa = 'Wonderful';
console.log(today, efa);

today = 'Awesome';
console.log(today,efa);

//efa = 'Super';
console.log(today, efa);
// const allows us to make a varialbe that we don't want to change.

// use let over var

let z = 'light';
console.log(z);

