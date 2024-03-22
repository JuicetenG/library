let titleInput = null;
let authorInput = null;
let pagesInput = null;
let readInput = null;

const table = document.querySelector('#table');
const books = [];

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
  books.forEach((book) => {    
    let bookRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookRead = document.createElement('td');
    let bookDelete = document.createElement('button');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookRead.textContent = book.readStatus;
    bookDelete.textContent = 'x';

    table.appendChild(bookRow);
    table.classList.add('book');
    bookRow.appendChild(bookTitle);
    bookRow.appendChild(bookAuthor);
    bookRow.appendChild(bookPages);
    bookRow.appendChild(bookRead);
    bookRow.appendChild(bookDelete);
    bookDelete.setAttribute('id', 'delete');
  });
}

/////////////////////* test */////////////////////
let testBook = new Book('test title', 'fake author', 69, 'not read');
books.push(testBook);
/////////////////////* test */////////////////////


addBook('title2', 'author2', 420, 'no');
addBook('title3', 'author3', 42069, 'yes');
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

displayBooks();