const table = document.querySelector('#table');
const addedBooks = document.querySelector('#domDiv');
const books = [];
let booksTracker = 0;

const addButton = document.querySelector('#addButton');
const submitButton = document.querySelector('#submitButton');

function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pageCount;
  this.readStatus = readStatus;
}

function addBook(title, author, pageCount, readStatus) {
  let newBook = new Book(title, author, pageCount, readStatus);
  books.push(newBook);
  displayBooks();
}

function displayBooks() {
  for(let i = 0; i < books.length; i ++) {
    if(i < booksTracker){
      continue;
    }
    console.log(i);
    console.log(booksTracker)
    let bookRow = document.createElement('tr');
    let bookTitle = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookRead = document.createElement('td');
    const bookDelete = document.createElement('button');

    bookTitle.textContent = books[i].title;
    bookAuthor.textContent = books[i].author;
    bookPages.textContent = books[i].pages;
    bookRead.textContent = books[i].readStatus;
    bookDelete.textContent = 'x';
    bookDelete.dataset.indexNumber = i;

    books[i].removeCode = i;
   
    bookRow.appendChild(bookTitle);
    bookRow.appendChild(bookAuthor);
    bookRow.appendChild(bookPages);
    bookRow.appendChild(bookRead);
    bookRow.appendChild(bookDelete);
    table.appendChild(bookRow);

    bookDelete.addEventListener('click', () => {
      function findBook() {
        for(let i = 0; i < books.length; i++) {
          if(books[i].removeCode === i)
            return i;
        } 
      }
      books.splice(findBook(), 1);
      table.removeChild(bookRow);
      booksTracker = books.length;
      console.log(books);
      console.log(i);
      console.log(booksTracker);
    });


    bookDelete.setAttribute('id', 'delete');
    booksTracker++;
  }
}

/////////////////////* test */////////////////////
addBook('hello', 'author guy', '42069', 'nunya');
addBook('hello', 'author guy', '42069', 'nunya');
addBook('hello', 'author guy', '42069', 'nunya');
addBook('hello', 'author guy', '42069', 'nunya');
/////////////////////* test */////////////////////

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let bookTitleField = document.querySelector('#bookTitle');
  let authorField = document.querySelector('#bookAuthor');
  let pagesField = document.querySelector('#bookPages');
  let readField = document.querySelector('#bookRead');
  addBook(bookTitleField.value, authorField.value, pagesField.value, readField.value);
  console.log(books);
  console.log(booksTracker);
});

