class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library.push(book);
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    this.library.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const buttonClass = book.isRead ? "finished-btn" : "read-btn";

      bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p><span>By:</span> ${book.author}</p>
                <p><span>Pages:</span> ${book.pages}</p>
                <p><span>Read Yet?</span> ${book.isRead ? "Yes" : "No"}</p>
                <div class="card-btn">
                  <button class="${buttonClass}" onclick="library.toggleReadStatus(${index})">
                      ${book.isRead ? "I've Finished!" : "Not Finished"}
                  </button>
                  <button class="remove-btn" onclick="library.removeBook(${index})">Delete</button>
                </div>
            `;

      bookList.appendChild(bookCard);
    });
  }

  removeBook(index) {
    this.library.splice(index, 1);
    this.displayBooks();
  }

  toggleReadStatus(index) {
    this.library[index].isRead = !this.library[index].isRead;
    this.displayBooks();
  }
}

const library = new Library();

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
  library.addBook(newBook);

  document.getElementById("new-book-form").classList.add("hidden");
  document.getElementById("form-container").classList.remove("form-background");
  document.getElementById("new-book-form").reset();
});

library.addBook(new Book("Game of Thrones", "George R. R. Martin", 694, true));
library.addBook(new Book("1984", "George Orwell", 328, true));
library.addBook(new Book("Harry Potter", "J.K. Rowling", 500, false));
library.addBook(
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, true)
);
library.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 310, false));
library.addBook(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false)
);
