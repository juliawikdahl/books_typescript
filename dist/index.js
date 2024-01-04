const bookshelf = document.getElementById('bookshelf');
let allBooks = [];
fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
    .then(response => {
    if (!response.ok) {
        throw new Error('Nätverkssvar var inte OK');
    }
    return response.json();
})
    .then((books) => {
    allBooks = books;
    books.forEach(book => {
        console.log('Book title from API:', book.title);
        const bookCover = createBookCover(book);
        bookshelf.appendChild(bookCover);
    });
})
    .catch(error => {
    console.error('Fel vid hämtning av böcker:', error);
});
function createBookCover(book) {
    const cover = document.createElement('div');
    cover.classList.add('book-cover');
    cover.style.background = `linear-gradient(135deg, ${book.color} 60%, #aabbcc 100%)`;
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = book.author;
    cover.appendChild(title);
    cover.appendChild(author);
    console.log('Book title in createBookCover:', book.title);
    cover.addEventListener('click', () => {
        navigateToSingleBookPage(book.id);
    });
    return cover;
}
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('name');
const searchResultsContainer = document.getElementById('searchResults');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submit event triggered');
    const searchTerm = searchInput.value.toLowerCase();
    console.log('Search term:', searchTerm);
    const searchResults = allBooks.filter(book => {
        const titleMatch = book.title.toLowerCase().startsWith(searchTerm);
        const authorMatch = book.author.toLowerCase().startsWith(searchTerm);
        return titleMatch || authorMatch;
    });
    console.log('Search results:', searchResults);
    displaySearchResults(searchResults);
});
function displaySearchResults(results) {
    searchResultsContainer.innerHTML = '';
    if (results.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No books found for the given search term.';
        searchResultsContainer.appendChild(noResultsMessage);
    }
    else {
        results.forEach(book => {
            const resultItem = document.createElement('div');
            resultItem.textContent = `Title: ${book.title}, Author: ${book.author}`;
            searchResultsContainer.appendChild(resultItem);
            console.log('Book title in displaySearchResults:', book.title);
            const seeMoreButton = document.createElement('button');
            seeMoreButton.textContent = 'See More';
            seeMoreButton.classList.add('seemorebtn');
            resultItem.appendChild(seeMoreButton);
            seeMoreButton.addEventListener('click', () => {
                navigateToSingleBookPage(book.id);
            });
        });
    }
}
function navigateToSingleBookPage(bookId) {
    window.location.href = `singleBook.html?id=${bookId}`;
}
