//nodes
const newBookButton = document.querySelector('.new-book');
const submitButton = document.querySelector('#create-book');
const consoleLog = document.querySelector('.console-log');
const bookContainer = document.querySelector('.book-container');

//default the new book button to have no display style
document.getElementById('book-input').style.display = 'none'





//Library Array
let myLibrary = [];

//Constructor for book objects
function book(author, title, numPages, isRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
}
//Book object function to add to library array
function addBookToLibrary(array){
    const containerDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const numPagesDiv = document.createElement('div');
    const isReadDiv = document.createElement('div');



    myLibrary.push(array);
    console.log(myLibrary);
    
    //container for text divs
    containerDiv.style.display ='flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.width = '10vw';
    containerDiv.style.height = '20vh';
    containerDiv.style.justifyContent = 'space-around';
    containerDiv.style.border = '1px solid blue';

    for(let i=0; i< myLibrary.length; i++){
        authorDiv.innerText = 'Author: ' + myLibrary[i].author;
        titleDiv.innerText = 'Title: ' + myLibrary[i].title;
        numPagesDiv.innerText = 'Num. of Pages ' + myLibrary[i].numPages;
        isReadDiv.innerText = 'Have Read?: ' + myLibrary[i].isRead;

        containerDiv.appendChild(authorDiv);
        containerDiv.appendChild(titleDiv);
        containerDiv.appendChild(numPagesDiv);
        containerDiv.appendChild(isReadDiv);
        bookContainer.appendChild(containerDiv);
    }


}

//test objects
const hp = new book('jk Rowling', 'Hary P and stone', 200, true);
const pj = new book('Rick Riordan', 'Percy Jackson', 250, false);
const gg = new book('some dude', 'Greate Gatsby', 500, false);
//test execution of function
addBookToLibrary(pj);
addBookToLibrary(hp);




//Function to input submit button
function submitInfo(event){
    event.preventDefault();
    consoleLog.innerText = 'preventDefault activated.';

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