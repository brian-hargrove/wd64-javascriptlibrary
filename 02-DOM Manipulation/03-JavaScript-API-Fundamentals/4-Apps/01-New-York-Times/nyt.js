const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'wJ9Cr0XdT4YVUAt0ICuqMG3tuBkvCHFA';
let url;

//Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results section
const section = document.querySelector('section');

nav.style.display = 'none'; // will hide the next and previous buttons upon starting page before results are shown

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    console.log(e);
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
        console.log(url);

    if(startDate.value !=='') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
    if(endDate.value !==''){
        url += '&end_date=' + endDate.value;
    }


    fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}

function displayResults(json){
    let articles = json.response.docs;

    if(articles.length===10){nextBtn.style.display="block";}  
    else {nextBtn.style.display="none";}
    
    if(pageNumber>0){previousBtn.style.display="block";}
    else{previousBtn.style.display="none";}

    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    
        
    if(articles.length <=10)/*changed === to <= this made buttons show up at end*/{
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
    
    if(articles.length === 0) {
        console.log("No Results");
    }else {
        for(let i=0; i <articles.length; i++){
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let snip = document.createElement('p');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');
        document.body.style.backgroundColor = "#ebe4a0";
        

        let current = articles[i];
        console.log("Current:", current);

        link.href = current.web_url;
        link.textContent = current.headline.main

        para.textContent = 'Keywords: ';

        snip.textContent = current.snippet;

        for(let j=0; j<current.keywords.length; j++){
            let span = document.createElement('span');
            span.textContent += current.keywords[j].value + '';
            para.appendChild(span);
        }

        if(current.multimedia.length > 0){
            img.src='http://www.nytimes.com/'+current.multimedia[0].url;
            img.alt = current.headline.main;
        }
        clearfix.setAttribute('class','clearfix');

        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img);
        article.appendChild(snip);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
        }
    }
};

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page Number:",pageNumber);
}
function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    }else {
        return;
    }
    fetchResults(e);
}


//!new code
if(pageNumber = 0){
    previousBtn.style.display = 'none';
}else previousBtn.style.display = 'block';