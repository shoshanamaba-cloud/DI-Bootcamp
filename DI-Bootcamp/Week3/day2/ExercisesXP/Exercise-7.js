
// 1. Create an array of books

let allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        alreadyRead: false
    }
];

// 2. Select the section from the HTML

let section = document.querySelector(".listBooks");

// 3. Display each book

for (let book of allBooks) {

    let bookDiv = document.createElement("div");

    let bookDetails = document.createElement("p");
    bookDetails.textContent = book.title + " written by " + book.author;

    let bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";

    // 4. If the book has already been read, change the text color

    if (book.alreadyRead === true) {
        bookDetails.style.color = "red";
    }

    // 5. Add the elements to the page

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    section.appendChild(bookDiv);
}
