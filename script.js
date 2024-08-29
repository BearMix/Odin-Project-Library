let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const buttonClass = book.isRead ? "finished-btn" : "read-btn";

    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><span>By:</span> ${book.author}</p>
            <p><span>Pages:</span> ${book.pages}</p>
            <p><span>Read Yet?</span> ${book.isRead ? "Yes" : "No"}</p>
            <div class="card-btn">
              <button class="${buttonClass}" onclick="toggleReadStatus(${index})">
                  ${book.isRead ? "I've Finished!" : "Not Finished"}
              </button>
              <button class="remove-btn" onclick="removeBook(${index})">Delete</button>
            </div>
        `;

    bookList.appendChild(bookCard);
  });
}

function removeBook(index) {
  library.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  library[index].isRead = !library[index].isRead;
  displayBooks();
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("new-book-form").classList.remove("hidden");
  document.getElementById("form-container").classList.add("form-background");
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("new-book-form").classList.add("hidden");
  document.getElementById("form-container").classList.remove("form-background");
  document.getElementById("new-book-form").reset();
});

document.getElementById("new-book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);

  document.getElementById("new-book-form").classList.add("hidden");
  document.getElementById("form-container").classList.remove("form-background");
  document.getElementById("new-book-form").reset();
});

addBookToLibrary(new Book("Game of Thrones", "George R. R. Martin", 694, true));
addBookToLibrary(new Book("1984", " George Orwell", 328, true));
addBookToLibrary(new Book("Harry Potter", "J.K. Rowling", 500, false));
addBookToLibrary(
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, true)
);
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, false));
addBookToLibrary(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false)
);
