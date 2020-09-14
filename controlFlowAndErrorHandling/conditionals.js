/*
* *************
! CONDITIONALS
* *************


? FALSY VALUES:
    - false
    - 0
    - "", '',``
    - null
    - undefined
    - NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"
*/

/*
* *******************
! IF
* *******************
*/

let light = 'on';

if(light == 'on') {
    console.log('The light is on')
}

let weather = 65;

if(weather < 70); {
    console.log('Wear a jacket')
}

let rain = true;

if(weather < 70 && rain != false){
    console.log('It is a little chilly and will possibly rain')
}