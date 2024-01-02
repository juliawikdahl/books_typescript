// main.ts
const bookshelf = document.getElementById('bookshelf');
// Fetch data from the API
fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
    .then(response => response.json())
    .then(books => {
    // Render books on the bookshelf
    books.forEach(book => {
        const bookCover = createBookCover(book);
        bookshelf.appendChild(bookCover);
    });
});
// Function to create a book cover element
function createBookCover(book) {
    const cover = document.createElement('div');
    cover.classList.add('book-cover');
    cover.style.backgroundColor = book.color;
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = book.author;
    cover.appendChild(title);
    cover.appendChild(author);
    // Add click event to navigate to detail page
    cover.addEventListener('click', () => {
        window.location.href = `singleBook.html?id=${book.id}`;
    });
    return cover;
}
