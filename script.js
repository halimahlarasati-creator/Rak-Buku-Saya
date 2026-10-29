const bookshelf = document.getElementById('bookshelf');
const reader = document.getElementById('reader');
const readerTitle = document.getElementById('reader-title');
const chapterTitle = document.getElementById('chapter-title');
const chapterText = document.getElementById('chapter-text');
const closeReader = document.getElementById('close-reader');
const themeToggle = document.getElementById('theme-toggle');

// 1. TAMPILKAN RAK BUKU
function renderBooks() {
    bookshelf.innerHTML = '';
    booksData.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.cover}" alt="Cover ${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.synopsis}</p>
            </div>
        `;
        // Kalau di-klik, buka buku
        card.addEventListener('click', () => openBook(book));
        bookshelf.appendChild(card);
    });
}

// 2. BUKA HALAMAN BACA
function openBook(book) {
    readerTitle.innerText = book.title;
    
    // Gabung semua bab jadi satu tampilan (bisa dipecah nanti kalau mau)
    let fullContent = '';
    book.chapters.forEach(chapter => {
        fullContent += `<h3 style="text-align:center; margin-top:2rem;">${chapter.title}</h3>`;
        fullContent += chapter.content;
    });
    
    chapterText.innerHTML = fullContent;
    reader.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 3. TUTUP HALAMAN BACA
closeReader.addEventListener('click', () => {
    reader.classList.add('hidden');
});

// 4. FITUR DARK MODE
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerText = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerText = '☀️';
    }
});

// Jalankan saat web dibuka
renderBooks();
