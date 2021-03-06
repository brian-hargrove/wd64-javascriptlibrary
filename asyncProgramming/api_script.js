//console.log('Test');
const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//eventListener
searchForm.addEventListener('submit',fetchSpace);


//FETCH FUNCTION
function fetchSpace(e) {
    e.preventDefault();  // this method allows us to cancel a default action by the brower.
    // console.log('Clicked');

    fetch(baseURL)  // starts the process of fetching from out resource
        .then(results => {
            //console.log(results);  // show our response
            return results.json()  // this method takes in a response (results), reads to completion and returns the results as a json format
        })
        .then(json => {
            console.log(json)
            displayRockets(json);
        })
}

//DISPLAY FUNCTION
function displayRockets(data) {
    console.log('DisplayRocket: ', data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li'); //create a li tag
        rocket.innerText = r.name
        spaceShips.appendChild(rocket).style.color = "red";
    });
}


