// script.js
const container = document.getElementById("book-list");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book-card";
  div.innerHTML = `
    <img src="${book.thumbnail}" alt="Cover of ${book.title}">
    <div class="book-info">
      <h3>${book.title}</h3>
      <p><strong>Author(s):</strong> ${book.authors.join(", ")}</p>
      <p><strong>Publisher:</strong> ${book.publisher}</p>
      <p><strong>Published:</strong> ${book.publishedDate}</p>
      <p><a href="${book.link}" target="_blank">More Info</a></p>
    </div>
  `;
  container.appendChild(div);
});

