function createBookCover(book) {
    const cover = document.createElement('div');
    cover.classList.add('book-cover');
    const gradientColor = book.color; // Hämta färg från API
    cover.style.background = `linear-gradient(135deg, ${gradientColor} 20%, #2980b9 80%)`;
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
export { createBookCover };
