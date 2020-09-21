/*You only need to use the index.js file. If submitted prior to the due date, June 4th, your instructor can provide feedback, allow you to update your code, and resubmit your solution.


Write an object literal that stores information about your favorite movie. 

nameOfMovie, runTime, characters, and genre should be keys directly inside the object. 

characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items. 

items itself will also be an array that should store no more than two (2) item objects. 

These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}). 

Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.*/

//! FIRST ATTEMPT
// let movie = {
//     nameOfMovie: 'Star Wars',
//     runTime: 121,
//     character: [{charOne: {
//             name: 'Han Solo',
//             age: 33,
//             items: ['blaster','the falcon']
//         },charTwo: {
//             name: 'Luke Skywalker',
//             age: 19,
//             items: ['X-Wing', 'lightsaber']
//         }
//     }]}
// console.log(movie.nameOfMovie);
// console.log(movie.runTime);
// console.log(movie.character);
// console.log(movie.character[0].charOne.name);
// console.log(movie.character[0].charOne.items[1]);


/*submission 9/18
let movie = {
    nameOfMovie: 'Star Wars',
    runTime: 121,
    character: [{charOne: {
            name: 'Han Solo',
            age: 33,
            items: ['blaster','the falcon']
        }},
        {charTwo: {
            name: 'Luke Skywalker',
            age: 19,
            items: ['X-Wing', 'lightsaber']
        }
}]}
console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.character);
console.log(movie.character[0].charOne.name);
console.log(movie.character[0].charOne.items[1]);
*/

// submission 9/19 14:30
let movie = {
    nameOfMovie: 'Star Wars',
    runTime: 121,
    character: [{charOne: {
            name: 'Han Solo',
            age: 33,
            items: [{itemOne: 'blaster',itemTwo: 'the falcon'}]
        }},
        {charTwo: {
            name: 'Luke Skywalker',
            age: 19,
            items: [{itemOne: 'X-Wing', itemTwo:'lightsaber'}]
        }
}]}
console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.character);
console.log(movie.character[0].charOne.name);
console.log(movie.character[0].charOne.items[0].itemTwo);
