//! ASYNCHRONOUS PROGRAMMING
/*
    - synchronous programming is code read line by line

    - asynchronous programming allows a program to do more than one thine at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.

*/

//? Synchronous sample
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('end');
}

firstSync();  //this invokes the code, so it runs firstSync then secondSync is ran because it is in the firstSync function

// "First Hello" - then "Second Hello" - then "End". Once the one before is completed, the next will execute.

//? Asynchronous Sample
const networkRequest = () => {
    setTimeout(() => {
    console.log('Async code')
    }, 2000); //setTimeout has two arguments: callback (our console.log), and time measures is in MS (milli seconds)
};
console.log('Hello World');
networkRequest();
console.log('The End');

//Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async Code)).

//! API

/*
    API: Application Program Interface
    
    - is NOT a database or a server
    - Allows us access points to the server
        - comes in the form of ENDPOINTS
        - endpoints directs us to set of data.

    ? REST API
    -REpresentational State Transfer
        - creates an object of requested data by the client, send value, in response to user.
    -Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
*/

//! FETCH()
/*
    - the fetch() method is an asynchronous method. Part of the browser. NOT JS
    - the fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
            - an unknown value when created
            - represents the eventural fulfilled value or rejection (error)
        *Promeises always one of these states:
            1. Pending: intitial state, neither fullfilled or rejects
            2. Fulfilled: meaning the operation completed successfully
            3. Rejected: meaning the operation failed
*/





