/*
* *********************
! CONSTRUCTOR FUNCTIONS
* *********************
    - Functions allows us to easily create a unique solution for different circumstances by using parameters.
        -creating several different objects with the same keys but different values.


*/

//Option 1
let person1 = {
    name: 'Brian',
    age: 48
    canVote: true
}
let person2 = {
    name: 'Dylan',
    age: 6
    canVote: false
}
let person3 = {
    name: 'Tony',
    age: 44
    canVote: true
};

//Option 2

//  (1)     (2)         (3)
function person(name, age, canVote) {
//  (4)    (5)   (6)    
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//console.log(typeof Person);

//             (7)   (8)
let person4 = new Person('Melissa', 46, true );
console.log(person4);

/*
    1. The keyword (function)
    2. The function NAME. For Constructor Functions, the name should be Capialized.
    3. The parameters. These will be the values of the object once this function is in use.
    4. The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or whatever activaties it. In this case, 'this' referes to 'Person'
    5. This will be a key of the new object we will create. This is NOT refering to the parameter.
    6. This is refering to the parameter we pass through our contructor funciton
    7 & 8: This 'new' keyword is calling our person function, creating a new person with the values we passing as arguments, and storing that person in a variable.
*/