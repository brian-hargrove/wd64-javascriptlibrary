// 1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2). 

// 2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below. 

// 3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.

// for(i=0; i<=10; i++){
// console.log(i); 
//     if (i % 2 === 0) {
//     console.log('The number is even');
// }
//     else {console.log('The number is odd');}
// }


for(i=0; i<=10; i++) /* this is the loop*/{
    oddEven(i) // this invokes the function
}
       
function oddEven(x) {
    console.log(x);
    let i = x
    if (i % 2 === 0) {
        console.log('The number is even');
    }
        else {console.log('The number is odd');}
    }
