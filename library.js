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
  table.innerHTML = '';
  addHeaders();

  for(let i = 0; i < books.length; i ++) {

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
      books.splice(i, 1);
      displayBooks();
      booksTracker = books.length;
      console.log(books);
      console.log(i);
      console.log(booksTracker);
    });

    bookDelete.setAttribute('id', 'delete');
  }
}

function addHeaders() {
  const headersRow = document.createElement('tr');
  
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Title';
  titleHeader.classList.add('title-column');
  headersRow.appendChild(titleHeader);

  const authorHeader = document.createElement('th');
  authorHeader.textContent = 'Author';
  authorHeader.classList.add('author-column');
  headersRow.appendChild(authorHeader);
  
  const pagesHeader = document.createElement('th');
  pagesHeader.textContent = 'Pages';
  pagesHeader.classList.add('pages-column');
  headersRow.appendChild(pagesHeader);

  const readHeader = document.createElement('th');
  readHeader.textContent = 'Read';
  readHeader.classList.add('read-column');
  headersRow.appendChild(readHeader);

  const deleteHeader = document.createElement('th');
  deleteHeader.textContent = '';
  deleteHeader.classList.add('delete-column');
  headersRow.appendChild(deleteHeader);

  table.appendChild(headersRow);
}

/////////////////////* test */////////////////////
addBook('1', 'author guy', '42069', 'nunya');
addBook('2', 'author guy', '42069', 'nunya');
addBook('3', 'author guy', '42069', 'nunya');
addBook('4', 'author guy', '42069', 'nunya');
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

