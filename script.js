let currentLang = 'id';
let currentBook = null;
let currentChapter = 0;

// Load saved progress
function loadProgress() {
    const saved = localStorage.getItem('readingProgress');
    return saved ? JSON.parse(saved) : null;
}

// Save progress
function saveProgress(bookId, chapter) {
    const progress = { bookId, chapter, timestamp: Date.now() };
    localStorage.setItem('readingProgress', JSON.stringify(progress));
}

// Render books
function renderBooks() {
    const shelves = [
        document.getElementById('shelf-1'),
        document.getElementById('shelf-2'),
        document.getElementById('shelf-3')
    ];
    
    booksData.forEach((book, index) => {
        const shelfIndex = index % 3;
        const bookEl = document.createElement('div');
        bookEl.className = 'book';
        bookEl.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.synopsis}</p>
            </div>
        `;
        bookEl.addEventListener('click', () => openBook(book, 0));
        shelves[shelfIndex].appendChild(bookEl);
    });
}

// Open book
function openBook(book, chapterIndex) {
    currentBook = book;
    currentChapter = chapterIndex;
    
    document.getElementById('modal-title').textContent = book.title;
    renderChapter();
    document.getElementById('reader-modal').classList.remove('hidden');
}

// Render chapter
function renderChapter() {
    const chapter = currentBook.chapters[currentChapter];
    document.getElementById('modal-body').innerHTML = chapter.content;
    
    const t = translations[currentLang];
    document.getElementById('chapter-indicator').textContent = 
        `${t.chapter} ${currentChapter + 1} / ${currentBook.chapters.length}`;
    
    document.getElementById('prev-chapter').disabled = currentChapter === 0;
    document.getElementById('next-chapter').disabled = 
        currentChapter === currentBook.chapters.length - 1;
    
    // Save progress
    saveProgress(currentBook.id, currentChapter);
    
    // Scroll to top
    document.getElementById('modal-body').scrollTop = 0;
}

// Navigation
document.getElementById('prev-chapter').addEventListener('click', () => {
    if (currentChapter > 0) {
        currentChapter--;
        renderChapter();
    }
});

document.getElementById('next-chapter').addEventListener('click', () => {
    if (currentChapter < currentBook.chapters.length - 1) {
        currentChapter++;
        renderChapter();
    }
});

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('reader-modal').classList.add('hidden');
});

// Continue reading button
document.getElementById('continue-reading').addEventListener('click', () => {
    const progress = loadProgress();
    if (progress) {
        const book = booksData.find(b => b.id === progress.bookId);
        if (book) {
            openBook(book, progress.chapter);
        }
    } else {
        alert(currentLang === 'id' ? 'Belum ada progres bacaan!' : 'No reading progress yet!');
    }
});

// Language switch
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
    document.getElementById('prev-chapter').textContent = t.previous;
    document.getElementById('next-chapter').textContent = t.next;
    
    document.getElementById('lang-id').classList.toggle('active', currentLang === 'id');
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
    
    if (currentBook) {
        renderChapter();
    }
}

// Initialize
renderBooks();
updateLanguage();
