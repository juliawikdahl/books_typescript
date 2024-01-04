interface Book {
    id: number;
    title: string;
    author: string;
    color: string;
    plot: string;
    publisher: string;
    year: number;
    pages: number;
    audience: string;
}

const bookCover = document.getElementById('cover');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const infotitle = document.getElementById('info-title');
const infoauthor = document.getElementById('info-author');
const infoContainer = document.getElementById('infoContainer');
const plot = document.getElementById('plot');
const publisher = document.getElementById('publisher');
const year = document.getElementById('year');
const pages = document.getElementById('pages');
const audience = document.getElementById('audience');

const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');



fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books/${bookId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Nätverksfel: ${response.status}`);
        }
        return response.json();
    })
    .then((book: Book) => {
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        infotitle.textContent = book.title;
        infoauthor.textContent = `By ${book.author}`;
        plot.textContent = book.plot;
        publisher.textContent = `Publisher: ${book.publisher}`;
        year.textContent = `First Published: ${book.year}`;
        pages.textContent = `Pages: ${book.pages}`;
        audience.textContent = `Audience: ${book.audience}`;
        const gradientColor = book.color; 
        bookCover.style.background = `linear-gradient(135deg, ${gradientColor} 20%, #2980b9 80%)`;
        bookCover.classList.add('book-cover');
    })
    .catch(error => {
        console.error('Fel vid hämtning av bok:', error);
    });


function goBack() {
    window.history.back();
}



