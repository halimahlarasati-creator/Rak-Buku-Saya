let currentLang = 'id';
let currentBook = null;
let currentChapter = 0;
let currentPage = 0;
let totalPages = 0;

function loadProgress() {
    const saved = localStorage.getItem('readingProgress');
    return saved ? JSON.parse(saved) : null;
}

function saveProgress(bookId, chapter, page) {
    const progress = { bookId, chapter, page, timestamp: Date.now() };
    localStorage.setItem('readingProgress', JSON.stringify(progress));
}

function renderBooks() {
    const shelves = [
        document.getElementById('shelf-1'),
        document.getElementById('shelf-2'),
        document.getElementById('shelf-3'),
        document.getElementById('shelf-4')
    ];
    
    booksData.forEach((book, index) => {
        const shelfIndex = index % 4;
        const bookEl = document.createElement('div');
        bookEl.className = 'book';
        bookEl.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.synopsis}</p>
            </div>
        `;
        bookEl.addEventListener('click', () => openBook(book, 0, 0));
        shelves[shelfIndex].appendChild(bookEl);
    });
}

function openBook(book, chapterIndex, pageIndex) {
    currentBook = book;
    currentChapter = chapterIndex;
    
    document.getElementById('reader-title').textContent = book.title;
    
    // Gabung semua chapter jadi satu konten panjang
    let fullContent = '';
    book.chapters.forEach(chapter => {
        fullContent += `<h3>${chapter.title}</h3>`;
        fullContent += chapter.content;
    });
    
    document.getElementById('reader-content').innerHTML = fullContent;
    
    // Hitung total "halaman" berdasarkan scroll
    const readerBody = document.getElementById('reader-body');
    readerBody.scrollTop = 0;
    
    // Tunggu render selesai, lalu hitung halaman
    setTimeout(() => {
        const scrollHeight = readerBody.scrollHeight;
        const clientHeight = readerBody.clientHeight;
        totalPages = Math.ceil(scrollHeight / clientHeight);
        if (totalPages < 1) totalPages = 1;
        
        document.getElementById('page-slider').max = totalPages;
        document.getElementById('page-slider').value = 1;
        currentPage = 1;
        updatePageIndicator();
    }, 100);
    
    document.getElementById('reader').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function updatePageIndicator() {
    const t = translations[currentLang];
    document.getElementById('page-indicator').textContent = 
        `${currentPage} / ${totalPages}`;
    document.getElementById('page-slider').value = currentPage;
    
    document.getElementById('prev-page').disabled = currentPage <= 1;
    document.getElementById('next-page').disabled = currentPage >= totalPages;
    
    // Scroll ke posisi halaman
    const readerBody = document.getElementById('reader-body');
    const scrollHeight = readerBody.scrollHeight;
    const clientHeight = readerBody.clientHeight;
    const scrollPerpage = scrollHeight / totalPages;
    readerBody.scrollTop = (currentPage - 1) * scrollPerpage;
    
    // Save progress
    if (currentBook) {
        saveProgress(currentBook.id, currentChapter, currentPage);
    }
}

// Event listeners
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePageIndicator();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageIndicator();
    }
});

document.getElementById('page-slider').addEventListener('input', (e) => {
    currentPage = parseInt(e.target.value);
    updatePageIndicator();
});

// Scroll tracking - update page number saat user scroll
document.getElementById('reader-body').addEventListener('scroll', (e) => {
    const readerBody = e.target;
    const scrollHeight = readerBody.scrollHeight;
    const clientHeight = readerBody.clientHeight;
    const scrollTop = readerBody.scrollTop;
    
    const scrollPerpage = scrollHeight / totalPages;
    const newPage = Math.floor(scrollTop / scrollPerpage) + 1;
    
    if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        document.getElementById('page-slider').value = currentPage;
        document.getElementById('page-indicator').textContent = 
            `${currentPage} / ${totalPages}`;
    }
});

document.getElementById('close-reader').addEventListener('click', () => {
    document.getElementById('reader').classList.add('hidden');
    document.body.style.overflow = '';
});

document.getElementById('continue-reading').addEventListener('click', () => {
    const progress = loadProgress();
    if (progress) {
        const book = booksData.find(b => b.id === progress.bookId);
        if (book) {
            openBook(book, progress.chapter || 0, progress.page || 0);
            // Restore page position
            setTimeout(() => {
                const readerBody = document.getElementById('reader-body');
                const scrollHeight = readerBody.scrollHeight;
                const clientHeight = readerBody.clientHeight;
                const scrollPerpage = scrollHeight / totalPages;
                readerBody.scrollTop = (progress.page - 1) * scrollPerpage;
            }, 200);
        }
    } else {
        alert(currentLang === 'id' ? 'Belum ada progres bacaan!' : 'No reading progress yet!');
    }
});

document.getElementById('lang-id').addEventListener('click', () => {
    currentLang = 'id';
    updateLanguage();
});

document.getElementById('lang-en').addEventListener('click', () => {
    currentLang = 'en';
    updateLanguage();
});

function updateLanguage() {
    const t = translations[currentLang];
    document.querySelector('[data-i18n="subtitle"]').textContent = t.subtitle;
    document.getElementById('continue-reading').title = t.continueReading;
    
    document.getElementById('lang-id').classList.toggle('active', currentLang === 'id');
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
}

// Initialize
renderBooks();
updateLanguage();
