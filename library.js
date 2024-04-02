const table = document.querySelector('#table');
const books = [];

const addButton = document.querySelector('#addButton');
const submitButton = document.querySelector('#submitButton');
const closeButton = document.querySelector('#closeButton');

let bookTitleField = document.querySelector('#bookTitle');
let authorField = document.querySelector('#bookAuthor');
let pagesField = document.querySelector('#bookPages');
let readField = document.querySelector('#bookRead');

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
    let changeRead = document.createElement('button');
    changeRead.classList.add('read-status');
    changeRead.classList.add(checkReadValue());
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
      checkReadValue();
      console.log(books[i]);
    });
    
    function checkReadValue() {
      if(books[i].readStatus === 'yes') {
        changeRead.classList.add('read-status-yes');
        changeRead.classList.remove('read-status-no');
      } else {
        changeRead.classList.add('read-status-no');
        changeRead.classList.remove('read-status-yes');
      }
    }
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

function checkForm() {
  console.log(form.checkValidity());

  if(form.checkValidity() === true) {
    addBook(bookTitleField.value, authorField.value, pagesField.value, readField.value);
    modal.close();
    form.reset();
    console.log(books);
    bookTitleField.classList.remove('invalid-input');
    authorField.classList.remove('invalid-input');
    pagesField.classList.remove('invalid-input');
  } else {
      if (bookTitleField.value === '') bookTitleField.classList.add('invalid-input');
      if (authorField.value === '') authorField.classList.add('invalid-input');
      if (pagesField.value === '') pagesField.classList.add('invalid-input');
    return;
  }
}

/////////////////////* test */////////////////////
addBook('Atomic Habits', 'James Clear', '320', 'yes');
addBook('Thinking, Fast and Slow', 'Daniel Kahneman', '499', 'yes');
addBook('Letters to a New Developer', 'Dan Moore', '232', 'no');
addBook('The Idea Factory', 'Jon Gertner', '422', 'yes');
/////////////////////* test */////////////////////

addButton.addEventListener('click', () => {
  modal.showModal();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkForm();
});

closeButton.addEventListener('click', () => {
  bookTitleField.classList.remove('invalid-input');
  authorField.classList.remove('invalid-input');
  pagesField.classList.remove('invalid-input');
  modal.close();
  form.reset();
});

