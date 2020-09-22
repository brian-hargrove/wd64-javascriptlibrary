//Write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object. 


//characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items. 

//items itself will also be an array that should store no more than two (2) item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}). 

let starWarsObj = {
    nameOfMovie: 'Star Wars: A New Hope',
    runTime: 121,
    characters: [
        {
            name: 'Han Solo',
            age: 33,
            items: [
                {itemOne: 'blaster'},
                {itemTwo: 'the falcon'},
            ],
        },
        {
            name: 'Luke Skywaker',
            age: 19,
            items: [
                {itemOne: 'R2-D2'},
                {itemTwo: 'light saber'}
            ]
        }
    ],
    genre: 'Sci-Fi'
}
console.log(starWarsObj.nameOfMovie);
console.log(starWarsObj.runTime);
console.log(starWarsObj.characters);
console.log(starWarsObj.characters[0].name);
console.log(starWarsObj.characters[0].items[1].itemTwo);
