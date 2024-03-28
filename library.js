const table = document.querySelector('#table');
const books = [];

const addButton = document.querySelector('#addButton');
const submitButton = document.querySelector('#submitButton');
const closeButton = document.querySelector('#closeButton');

const modal = document.querySelector('#formModal');
const form = document.querySelector('#bookForm');

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

const displayBooks = () => {
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
    bookRead.classList.add('read-status');
    let changeRead = document.createElement('button');
    changeRead.textContent = books[i].readStatus;
    bookRead.append(changeRead);
    bookRow.appendChild(bookRead);
    
    let deleteCell = document.createElement('td');
    let bookDelete = document.createElement('button');
    bookDelete.textContent = 'x';
    bookDelete.setAttribute('id', 'delete');
    deleteCell.append(bookDelete);
    bookRow.appendChild(deleteCell);
  
    bookDelete.addEventListener('click', () => {
      books.splice(i, 1);
      displayBooks();
      console.log(books)
    });
  
    changeRead.addEventListener('click', () => {
      changeRead.textContent = books[i].changeReadStatus();
      console.log(books[i]);
    });
  
    table.appendChild(bookRow);
  }
}

Book.prototype.changeReadStatus = function() {
  if(this.readStatus === 'yes') {
    this.readStatus = 'no';
    return this.readStatus = 'no';
  } else {
    this.readStatus = 'yes';
    return 'yes';
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

addButton.addEventListener('click', () => {
  modal.showModal();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let bookTitleField = document.querySelector('#bookTitle');
  let authorField = document.querySelector('#bookAuthor');
  let pagesField = document.querySelector('#bookPages');
  let readField = document.querySelector('#bookRead');

  addBook(bookTitleField.value, authorField.value, pagesField.value, readField.value);
  modal.close();
  form.reset();
  console.log(books);
});

closeButton.addEventListener('click', () => {
  modal.close();
  form.reset();
});


