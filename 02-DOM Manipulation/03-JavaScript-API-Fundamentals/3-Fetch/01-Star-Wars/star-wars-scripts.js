let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
return response.json();    
})
.then(function(json) {
    console.log(json)
    let people = json.results;

for (m of people) {
    let listItem = document.createElement('li');
    listItem.innerHTML = '<p>' + m.name + '</p)';
    starWarsPeopleList.appendChild(listItem);
}
});