//nodes
const newBookButton = document.querySelector('.new-book');
const submitButton = document.querySelector('#create-book');
const consoleLog = document.querySelector('.console-log');
const bookContainer = document.querySelector('.book-container');
//Form variables
let authorCall = document.getElementById('author-input').value;
let titleCall = document.getElementById('title-input').value;
let numPageCall = document.getElementById('num-pages').value;
//isRead variable entered into submit button book creation
let isReadVar = false;

//default the form to have no display style
document.getElementById('book-input').style.display = 'none'

//checks value of isread to assign variable
function assignIsRead(){
    let isReadRadio = document.querySelector('input[name ="has-read"]:checked');
    if(isReadRadio.value == 'yes'){
        isReadVar = true;
    } else {
        isReadVar = false;
    }
}
console.log(isReadVar);



//Library Array
let myLibrary = [];

//Object Constructor for book objects
function book(author, title, numPages, isRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
}

//Book object function to add to library array
function addBookToLibrary(obj){
    //Retrieve information from form
    


    myLibrary.push(obj);
    console.log(myLibrary);

    const containerDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const numPagesDiv = document.createElement('div');
    const isReadDiv = document.createElement('div');
    const isReadButton = document.createElement('button');

    //container for text divs styling
    containerDiv.style.display ='flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.padding = '1px'
    containerDiv.style.width = '15vw';
    containerDiv.style.height = 'auto';
    containerDiv.style.justifyContent = 'space-around';
    containerDiv.style.border = '1px solid blue';
    isReadButton.style.width = 'auto';
    //Text for isreadbutton
    isReadButton.innerText = 'Read';

    for(let i=0; i< myLibrary.length; i++){
        //text divs
        authorDiv.innerText =  `Author: \n ${myLibrary[i].author}`;
        titleDiv.innerText = `Title: \n ${myLibrary[i].title}`;
        numPagesDiv.innerText = `Num. of Pages: \n ${myLibrary[i].numPages}`;
        isReadDiv.innerText = `Have Read?: \n ${myLibrary[i].isRead ? 'Yes' : 'No'} `;

        //Append for container and text divs
        containerDiv.appendChild(authorDiv);
        containerDiv.appendChild(titleDiv);
        containerDiv.appendChild(numPagesDiv);
        containerDiv.appendChild(isReadDiv);
        bookContainer.appendChild(containerDiv);
        containerDiv.appendChild(isReadButton);
    }
}



//test objects
const hp = new book('JK Rowling', 'Hary P and Stone', 200, true);
const pj = new book('Rick Riordan', 'Percy Jackson', 250, false);
const gg = new book('Some Dude', 'Greate Gatsby', 500, false);
//Testing confirms each iteration of the function for the book objects creates a new book div and using ...args on the function creates only one
//Test complete refer to submit button to see book on submit












//Function to input submit button
function submitInfo(event){
    assignIsRead();
    const newBook = new book(authorCall,titleCall,numPageCall,isReadVar);
    event.preventDefault();
    console.log(newBook);
    
    addBookToLibrary(newBook);
    consoleLog.innerText = 'preventDefault activated. Console updated.';
}



//Open the form to fill out new book object in html doc
function inputBookInfo(){
    
    if(document.getElementById('book-input').style.display == 'none'){
        document.getElementById('book-input').style.display = 'flex';
    } else {
        document.getElementById('book-input').style.display = 'none';
    }
}

submitButton.addEventListener('click', submitInfo);
//click listener to pop form into html doc
newBookButton.addEventListener('click', inputBookInfo);