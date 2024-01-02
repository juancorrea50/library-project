//Variables, nodes, and default styling
const newBookButton = document.querySelector('.new-book');
const submitButton = document.querySelector('#create-book');
const consoleLog = document.querySelector('.console-log');
const bookContainer = document.querySelector('.book-container');

//isRead variable entered into submit button book creation and delete/isRead buttons
let isReadVar = false;

//Library Array
let myLibrary = [];
//default the form to have no display style
const dialogInput = document.getElementById('book-input');
const closeButton = document.querySelector('.close-button');
//dialogInput.style.display = 'none';

//Object Constructor for book objects
class book {
    constructor(author, title, numPages, isRead) {
        this.author = author;
        this.title = title;
        this.numPages = numPages;
        this.isRead = isRead;
    }
    //Setters and getters
    get getAuthor(){
        return this.author;
    }
    set setAuthor(value){
        this.author = value;
    }
    get getTitle(){
        return this.title;
    }
    set setTitle(value){
        this.title = value;
    }
    get getNumPages(){
        return this.numPages;
    }
    set setNumPages(value){
        this.numPages = value;
    }
    get getIsRead(){
        return this.isRead;
    }
    set setIsRead(value){
        this.isRead = value;
    }
}
//Book object function to add to library array
function addBookToLibrary(obj){
    //Take input object and push to library array
    myLibrary.push(obj);
    console.log(myLibrary);

    //Create divs for each display of keys from the object and the buttons to remove books and change isRead
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
  
    //Create divs housing book information and append a number to the index in the library array
    for(let i=0; i< myLibrary.length; i++){
        //Puts text and information from object into the text divs
        authorDiv.innerText =  `Author: \n ${myLibrary[i].getAuthor}`;
        titleDiv.innerText = `Title: \n ${myLibrary[i].getTitle}`;
        numPagesDiv.innerText = `Num. of Pages: \n ${myLibrary[i].getNumPages}`;
        isReadDiv.innerText = `Have Read?: \n ${myLibrary[i].getIsRead ? 'Yes' : 'No'} `;

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
    
    //Remove book from library
    deleteButton.addEventListener('click', (index) => {
        //Remove clicked container div from front end
        bookContainer.removeChild(containerDiv);       
        
        //splice function here pass index as a parameter and use here for accurate deletion of array items on click and console logs the length of the array
        myLibrary.splice(index, 1);
        console.log('Library array length: ' + myLibrary.length);
    })
    //Switch isRead Variable
    isReadButton.addEventListener('click', () => {
        isReadVar == true ? isReadVar = false : isReadVar = true;
        isReadDiv.innerText = `Have Read?: \n ${isReadVar ? 'Yes' : 'No'} `;
    });
}

//checks value of isread to assign variable
function assignIsRead(){
    let isReadRadio = document.querySelector('input[name ="has-read"]:checked');
    if(isReadRadio.value == 'yes'){
       return isReadVar = true;
    } else {
       return isReadVar = false;
    }
}

//Function to input submit button
function submitInfo(event){
    //Form variables
    let authorCall = document.getElementById('author-input').value;
    let titleCall = document.getElementById('title-input').value;
    let numPageCall = document.querySelector('input[type="number"]').value;
    //Prevents submitting the form
    event.preventDefault();

    //Creates new book and logs the book object
    const newBook = new book(authorCall,titleCall,numPageCall,assignIsRead());
    console.log(newBook);
    //Activates function to push into myLibrary array
    addBookToLibrary(newBook);
}


//Button Clicks

//Show modal form on click
newBookButton.addEventListener('click', () => {
    dialogInput.showModal();
})
//Submit information
submitButton.addEventListener('click', (e) =>{
    //e is passed through to prevent default submit behaviour

    //closes dialog box and makes the bottom div read as follows
    dialogInput.close(submitInfo(e));
})
dialogInput.addEventListener('close', () => {
    console.log(dialogInput.returnValue);
    consoleLog.innerText = 
    dialogInput.returnValue == 'close'
    ? 'No info' : 'Book Pushed';
    dialogInput.returnValue = '';
})

