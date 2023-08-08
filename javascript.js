const newBookButton = document.querySelector('.new-book')
//default the new book button to have no display style
document.getElementById('book-input').style.display = 'none'

//Library Array
let myLibrary = [];

//Constructor for book objects
function Book(author, title, numPages, isRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
}

//Book object function to add to library array
function addBookToLibrary(...args){
    /*Push book object into library array */
    myLibrary.push(args);
    //Log myLibrary array
    console.log(myLibrary);
}
function createNewBook(){
    /*Create new book object to enter into the addBookToLibrary function */
}
//Open the form to fill out new book object in html doc
function inputBookInfo(){
    
    if(document.getElementById('book-input').style.display == 'none'){
        document.getElementById('book-input').style.display = 'flex';
    } else {
        document.getElementById('book-input').style.display = 'none';
    }
}
//click listener to pop form into html doc
newBookButton.addEventListener('click', inputBookInfo);