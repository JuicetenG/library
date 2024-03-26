const table = document.querySelector('#table');
const books = [];

const addButton = document.querySelector('#addButton');
const submitButton = document.querySelector('#submitButton');

const form = document.querySelector('#formModal');

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
    let bookRow = document.createElement('tr');

    let bookTitle = document.createElement('td');
    bookTitle.textContent = books[i].title;
    bookRow.appendChild(bookTitle);

    let bookAuthor = document.createElement('td');
    bookAuthor.textContent = books[i].author;
    bookRow.appendChild(bookAuthor);

    let bookPages = document.createElement('td');
    bookPages.textContent = books[i].pages;
    bookRow.appendChild(bookPages);

    let bookRead = document.createElement('td');
    bookRead.textContent = books[i].readStatus;
    bookRow.appendChild(bookRead);

    const bookDelete = document.createElement('button');
    bookDelete.textContent = 'x';
    bookDelete.setAttribute('id', 'delete');
    bookRow.appendChild(bookDelete);

    bookDelete.addEventListener('click', () => {
      books.splice(i, 1);
      displayBooks();
      console.log(books)
    });

    table.appendChild(bookRow);
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
addBook('1', 'author guy', '42069', 'yes');
addBook('2', 'author guy', '42069', 'yes');
addBook('3', 'author guy', '42069', 'no');
addBook('4', 'author guy', '42069', 'yes');
/////////////////////* test */////////////////////

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let bookTitleField = document.querySelector('#bookTitle');
  let authorField = document.querySelector('#bookAuthor');
  let pagesField = document.querySelector('#bookPages');
  let readField = document.querySelector('#bookRead');
  addBook(bookTitleField.value, authorField.value, pagesField.value, readField.value);
  form.close();
});

addButton.addEventListener('click', () => {
  form.showModal();
});

