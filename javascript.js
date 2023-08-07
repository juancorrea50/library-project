const newBook = document.querySelector('.new-book')


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
function addBookToLibrary(){

}