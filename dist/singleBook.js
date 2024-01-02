// detail.ts
const bookCover = document.getElementById('cover');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const infoContainer = document.getElementById('infoContainer');
const plot = document.getElementById('plot');
const publisher = document.getElementById('publisher');
const year = document.getElementById('year');
const pages = document.getElementById('pages');
const audience = document.getElementById('audience');
const infotitle = document.getElementById('info-title');
const infoauthor = document.getElementById('info-author');
// Get book ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');
// Fetch book details from the API based on the ID
fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books/${bookId}`)
    .then(response => response.json())
    .then(book => {
    // Set content for elements
    bookCover.style.backgroundColor = book.color;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    infotitle.textContent = book.title;
    infoauthor.textContent = `By ${book.author}`;
    plot.textContent = book.plot;
    publisher.textContent = `Publisher: ${book.publisher}`;
    year.textContent = `First Published: ${book.year}`;
    pages.textContent = `Pages: ${book.pages}`;
    audience.textContent = `Audience: ${book.audience}`;
});
// Function to navigate back to the main page
function goBack() {
    window.history.back();
}
