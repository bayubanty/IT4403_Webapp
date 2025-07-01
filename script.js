const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const bookList = document.getElementById('book-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = input.value.trim();
  if (query) {
    searchBooks(query);
  }
});

function searchBooks(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayBooks(data.items || []);
    })
    .catch(error => {
      console.error("Error fetching books:", error);
    });
}

function displayBooks(books) {
  bookList.innerHTML = '';

  if (books.length === 0) {
    bookList.innerHTML = '<p>No books found.</p>';
    return;
  }

  books.forEach(book => {
    const info = book.volumeInfo;
    const card = document.createElement('div');
    card.className = 'book-card';

    const thumbnail = info.imageLinks?.thumbnail || 'https://via.placeholder.com/100x150?text=No+Image';

    card.innerHTML = `
      <img src="${thumbnail}" alt="Book Cover">
      <div class="book-info">
        <h3>${info.title || "No Title"}</h3>
        <p><strong>Author(s):</strong> ${(info.authors || ["N/A"]).join(", ")}</p>
        <p><strong>Publisher:</strong> ${info.publisher || "N/A"}</p>
        <p><strong>Published:</strong> ${info.publishedDate || "N/A"}</p>
        <a href="${info.previewLink || "#"}" target="_blank">Preview</a>
      </div>
    `;
    bookList.appendChild(card);
  });
}
