/*
* ******************
! ARRAYS
* ******************
*/

//? POPULATINS & REFERRING

let list = ['orange', 'banana','oreos'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2
// when we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha','Amira']];
//console.log(typeof students);
console.log(students instanceof Array); //'instance of' operator is used to check the type of an object at run time. Remember that arrays are technically objects

console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/

//index position     ( 0  )   (  1   )    ( 2 )   (3 )  (4) ( 5 ) (            6          )
let student =       ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];
//                                                                    0        1        2

console.log(student[1]);
console.log(student[6][2]);
console.log(`Hello ${student[1]}`);
console.log(`Hello ${student[6][2]}`)

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.


let food = ['Pecan Pie','Shrimp','Quesadilla','Cheese Cake','Hotdog'];

for(foodItem of food) {
    console.log(foodItem);
}

//Add to our array
food.push('Pizza');//Appends Pizza to the end of our array
console.log('push:',food); 

//Remove and insert
food.splice(1,1,'Banana'); // Removes shrimp, add banana => (position, how many to remove, what to add)
console.log('splice:',food);

food.splice(2,0,'Sweet Potato Pie');
console.log('splice 2:', food);

//Remove from end
food.pop();   // pop removes the last item of an array
console.log('pop:',food);

//Adds to the start 
food.unshift('Popcorn','Steak'); //unshift adds one or more elements to the beginning of the array
console.log('unshift:', food);

//Remove from start
food.shift(); // shift removes the first element in an array
console.log('shift:',food);

//? LENGTH

// We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue','green','yellow','red','orange','purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

//? ITERATING
/*
    forEach - 
        - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop
     
        - runs three segments:
            1. The Value
            2. The Index
            3. The array object itself
*/

// arrayObject.forEach(value,index) = > return);

let foodList = ['apple','pear','mushroom','cheese','peach'];

// for(let i = 0; i < foodList.length; i++) {
//     console.log(foodList[i]);
// }

// We invoke callback function for each element within our array
// foodList.forEach(foodItem => console.log(foodItem));
// A callback function is another function we invoke within our main function

// function print(callback) {
//         callback();
// }

foodList.forEach((foodItem, index)=>{
    console.log(index);
    console.log(foodItem)
})

// - the second position of the parameter is ALWAYS the index.

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['The Phantom Menace', 'Attack of the Clones','Revenge of the Sith','A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach(movies => console.log(movies));

movies.push('The Force Awakens');
    console.log(movies);

movies.splice(0,1,'Rogue One');
    console.log(movies);


