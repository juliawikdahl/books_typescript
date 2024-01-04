interface Book {
    id: number;
    title: string;
    author: string;
    color: string;
}


const bookshelf = document.getElementById('bookshelf');

fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
    .then(response => {
        if (!response.ok) {
            throw new Error('Nätverkssvar var inte OK');
        }
        return response.json();
    })
    .then((books: Book[]) => {
        books.forEach(book => {
            const bookCover = createBookCover(book);
            bookshelf.appendChild(bookCover);
        });
    })
    .catch(error => {
        console.error('Fel vid hämtning av böcker:', error);
    });



function createBookCover(book: Book) {
    const cover = document.createElement('div');
    cover.classList.add('book-cover');
    cover.style.background = `linear-gradient(135deg, ${book.color} 60%, #aabbcc 100%)`;

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
