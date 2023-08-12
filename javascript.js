//Variables, nodes, and default styling
const newBookButton = document.querySelector('.new-book');
const submitButton = document.querySelector('#create-book');
const consoleLog = document.querySelector('.console-log');
const bookContainer = document.querySelector('.book-container');
//Form variables
let authorCall = document.getElementById('author-input').value;
let titleCall = document.getElementById('title-input').value;
let numPageCall = document.getElementById('num-pages').value;
//isRead variable entered into submit button book creation and delete/isRead buttons
let isReadVar = false;

//Library Array
let myLibrary = [];
//default the form to have no display style
const dialogInput = document.getElementById('book-input');
dialogInput.style.display = 'none';
const closeButton = document.querySelector('.close-button');

//checks value of isread to assign variable
function assignIsRead(){
    let isReadRadio = document.querySelector('input[name ="has-read"]:checked');
    if(isReadRadio.value == 'yes'){
        isReadVar = true;
    } else {
        isReadVar = false;
    }
}

//Object Constructor for book objects
function book(author, title, numPages, isRead) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
}

//Book object function to add to library array
function addBookToLibrary(obj){
    //Take input object and push to library array
    myLibrary.push(obj);
    console.log(myLibrary);

    //Create divs for each display of keys from the object and the buttons to remove and change isRead
    const containerDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const numPagesDiv = document.createElement('div');
    const isReadDiv = document.createElement('div');
    const buttonDiv = document.createElement('div');
    const isReadButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    //Styling for container div 
    containerDiv.style.display ='flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.padding = '1px'
    containerDiv.style.width = '15vw';
    containerDiv.style.height = 'auto';
    containerDiv.style.justifyContent = 'space-around';
    containerDiv.style.border = '1px solid blue';
    isReadButton.style.width = 'auto';

    //Styling for button container
    buttonDiv.style.display = 'flex';
    buttonDiv.style.gap = '40px';
    buttonDiv.style.alignItems = 'center';
    buttonDiv.style.justifyContent = 'center';
    
    //Text for delete and isRead buttons
    isReadButton.innerText = 'Read';
    deleteButton.innerText = 'Delete';
  
    //Create div housing book information and append a number to the index in the library array
    for(let i=0; i< myLibrary.length; i++){
        //Puts text and information from object into the text divs
        authorDiv.innerText =  `Author: \n ${myLibrary[i].author}`;
        titleDiv.innerText = `Title: \n ${myLibrary[i].title}`;
        numPagesDiv.innerText = `Num. of Pages: \n ${myLibrary[i].numPages}`;
        isReadDiv.innerText = `Have Read?: \n ${myLibrary[i].isRead ? 'Yes' : 'No'} `;

        //Append children for container and text divs
        containerDiv.appendChild(authorDiv);
        containerDiv.appendChild(titleDiv);
        containerDiv.appendChild(numPagesDiv);
        containerDiv.appendChild(isReadDiv);
        bookContainer.appendChild(containerDiv);
        containerDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(isReadButton);
        buttonDiv.appendChild(deleteButton);
    }
    
    deleteButton.addEventListener('click', () => {
        bookContainer.removeChild(containerDiv);
    })
}

//Remove book from library
function removeBookfromLibrary(event){
    console.log(event);
}

//Function to input submit button
function submitInfo(event){
    assignIsRead();
    const newBook = new book(authorCall,titleCall,numPageCall,isReadVar);
    event.preventDefault();
    console.log(newBook);
    
    addBookToLibrary(newBook);
    consoleLog.innerText = 'preventDefault activated. book pushed.';
}




//Adds books to library physically and on array
submitButton.addEventListener('click', submitInfo);

//click listener to pop form into html doc
newBookButton.addEventListener('click', ()=> {
    dialogInput.style.display = 'flex';
    dialogInput.showModal();
})
//Executes functions on close
dialogInput.addEventListener('close',() =>{
    dialogInput.close(consoleLog.innerText = 'No info');
    dialogInput.style.display = 'none';
})
