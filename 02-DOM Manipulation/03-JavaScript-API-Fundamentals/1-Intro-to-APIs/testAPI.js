// function callbackFunction(){
//     const data = {
//         name: 'Ralf Machio', 
//         age: 66, 
//         occupation: 'kickboxing'
//     }
//     return data;
// }

// function showGreeting(dataFromFunction){
//     return "hello " + dataFromFunction.name + ", I hear you're the greatest?!" + " And, you are " + dataFromFunction.age
// }

// // console.log(
// //     showGreeting(callbackFunction())
// // )

// function callbackFunction(){
//     for(let i = 0; i < 100; i++){
//         console.log(i)
//     }

//      const data = {
//         name: 'Ralf Machio', 
//         age: 66, 
//         occupation: 'kickboxing'
//     }
//     return data;
// }

// function showData(dataFromFunction){
//     return "hello " + dataFromFunction.name
// }

// console.log(
//     showData(callbackFunction())
// )

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();