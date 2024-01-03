const bookshelf = document.getElementById('bookshelf');

fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
    .then(response => response.json())
    .then(books => {
       
        books.forEach(book => {
            const bookCover = createBookCover(book);
            bookshelf.appendChild(bookCover);
        });
    });

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

    cover.addEventListener('click', () => {
        window.location.href = `singleBook.html?id=${book.id}`;
    });

    return cover;
}
