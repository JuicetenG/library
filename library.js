const table = document.querySelector('#table');
const books = [];
const booksTracker = [];

const addButton = document.querySelector('#addButton');
const submitButton = document.querySelector('#submitButton');

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pageCount;
  this.readStatus = readStatus;

  this.info = function() {
    return (title + ' by ' + author 
    + ', ' + pageCount + ' pages, ' + readStatus);
  };
}

function addBook(title, author, pageCount, readStatus) {
  let newBook = new Book(title, author, pageCount, readStatus);
  books.push(newBook);
}

function displayBooks() {
  for(let i = 0; i < books.length; i++) {
    if(booksTracker.includes(books[i].title)){
      continue;
    }
    let bookRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookRead = document.createElement('td');
    let bookDelete = document.createElement('button');

    bookTitle.textContent = books[i].title;
    bookAuthor.textContent = books[i].author;
    bookPages.textContent = books[i].pages;
    bookRead.textContent = books[i].readStatus;
    bookDelete.textContent = 'x';

    table.appendChild(bookRow);
    table.classList.add('book');
    bookRow.appendChild(bookTitle);
    bookRow.appendChild(bookAuthor);
    bookRow.appendChild(bookPages);
    bookRow.appendChild(bookRead);
    bookRow.appendChild(bookDelete);
    bookDelete.setAttribute('id', 'delete');

    booksTracker.push(books[i].title);
    console.log(booksTracker);
  }
}

/////////////////////* test */////////////////////
addBook('hello', 'author guy', '42069', 'nunya');
displayBooks();
/////////////////////* test */////////////////////

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let bookTitleField = document.querySelector('#bookTitle');
  let authorField = document.querySelector('#bookAuthor');
  let pagesField = document.querySelector('#bookPages');
  let readField = document.querySelector('#bookRead');
  addBook(bookTitleField.value, authorField.value, pagesField.value, readField.value);
  displayBooks();
  form.reset(); 
});
