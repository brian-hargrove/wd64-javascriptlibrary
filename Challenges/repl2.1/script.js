let url = 'https://rickandmortyapi.com/api/character/';


fetch(url)
    .then(function(results){
        return results.json();
    })
    .then(function(json){
        //console.log(json);
        displayCharacter(json);
    })

function displayCharacter(data) {
    console.log('d:', data)
    
    let photoOne = document.createElement('img');
    photoOne.setAttribute('src',data.results[10].image)
    document.body.appendChild(photoOne);

    let photoTwo = document.createElement('img');
    photoTwo.setAttribute('src',data.results[6].image)
    document.body.appendChild(photoTwo);
};




