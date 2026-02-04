/**
 * TechPuls - Main Application JavaScript
 * Handles rendering of articles on the homepage and article pages
 */

// Configuration
const CONFIG = {
    articlesPerPage: 6,
    placeholderImages: {
        mobil: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">📱</text></svg>',
        pc: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">💻</text></svg>',
        gaming: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">🎮</text></svg>',
        software: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">⚙️</text></svg>',
        ai: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">🤖</text></svg>',
        vitenskap: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">🔬</text></svg>',
        sikkerhet: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">🔒</text></svg>',
        elbil: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">🚗</text></svg>',
        default: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 225"><rect fill="%23e6f0fa" width="400" height="225"/><text x="200" y="112" text-anchor="middle" fill="%230066cc" font-family="system-ui" font-size="48">📰</text></svg>'
    }
};

// State
let currentPage = 1;
let currentCategory = 'alle';
let displayedArticles = 0;

/**
 * Get image URL for article (use placeholder if no image)
 */
function getImageUrl(article) {
    if (article.image && article.image.trim() !== '') {
        return article.image;
    }
    return CONFIG.placeholderImages[article.category] || CONFIG.placeholderImages.default;
}

/**
 * Get category display name
 */
function getCategoryDisplayName(category) {
    const names = {
        mobil: 'Mobil',
        pc: 'PC & Gaming',
        gaming: 'Gaming',
        software: 'Software',
        ai: 'AI',
        vitenskap: 'Vitenskap',
        sikkerhet: 'Sikkerhet',
        elbil: 'Elbil'
    };
    return names[category] || category;
}

/**
 * Create HTML for hero article
 */
function createHeroHTML(article) {
    return `
        <a href="article.html?id=${article.id}" class="hero-article">
            <div class="hero-image">
                <img src="${getImageUrl(article)}" alt="${article.imageAlt || article.title}">
            </div>
            <div class="hero-content">
                <span class="article-category">${getCategoryDisplayName(article.category)}</span>
                <h1 class="hero-title">
                    <span>${article.title}</span>
                </h1>
                <p class="hero-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span class="article-author">${article.author}</span>
                    <span class="article-date">${formatRelativeTime(article.date)}</span>
                </div>
            </div>
        </a>
    `;
}

/**
 * Create HTML for article card
 */
function createArticleCardHTML(article) {
    return `
        <article class="article-card">
            <a href="article.html?id=${article.id}">
                <div class="article-card-image">
                    <img src="${getImageUrl(article)}" alt="${article.imageAlt || article.title}">
                </div>
                <div class="article-card-content">
                    <span class="article-category">${getCategoryDisplayName(article.category)}</span>
                    <h3 class="article-card-title">${article.title}</h3>
                    <p class="article-card-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <span class="article-author">${article.author}</span>
                        <span class="article-date">${formatRelativeTime(article.date)}</span>
                    </div>
                </div>
            </a>
        </article>
    `;
}

/**
 * Create HTML for popular list item
 */
function createPopularItemHTML(article, index) {
    return `
        <div class="popular-item">
            <span class="popular-number">${index + 1}</span>
            <div class="popular-content">
                <h4><a href="article.html?id=${article.id}">${article.title}</a></h4>
                <div class="article-meta">
                    <span class="article-date">${formatRelativeTime(article.date)}</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render hero section
 */
function renderHeroSection() {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) return;

    const featured = getFeaturedArticle();
    if (featured) {
        heroSection.innerHTML = createHeroHTML(featured);
    }
}

/**
 * Render articles grid
 */
function renderArticlesGrid(append = false) {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;

    let articles = getArticlesByCategory(currentCategory);

    // Remove featured article from grid if on first page
    if (!append) {
        const featured = getFeaturedArticle();
        if (featured) {
            articles = articles.filter(a => a.id !== featured.id);
        }
    }

    const start = append ? displayedArticles : 0;
    const end = start + CONFIG.articlesPerPage;
    const articlesToShow = articles.slice(start, end);

    if (!append) {
        articlesGrid.innerHTML = '';
        displayedArticles = 0;
    }

    articlesToShow.forEach(article => {
        articlesGrid.innerHTML += createArticleCardHTML(article);
    });

    displayedArticles = end;

    // Hide load more button if no more articles
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedArticles >= articles.length ? 'none' : 'block';
    }
}

/**
 * Render popular sidebar
 */
function renderPopularSidebar() {
    const popularList = document.getElementById('popular-list');
    if (!popularList) return;

    const popular = getPopularArticles(5);
    popularList.innerHTML = popular
        .map((article, index) => createPopularItemHTML(article, index))
        .join('');
}

/**
 * Initialize homepage
 */
function initHomepage() {
    renderHeroSection();
    renderArticlesGrid();
    renderPopularSidebar();

    // Load more button handler
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            renderArticlesGrid(true);
        });
    }

    // Category navigation
    document.querySelectorAll('.nav-link[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;

            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            // Filter articles
            currentCategory = category;
            displayedArticles = 0;
            renderArticlesGrid();
        });
    });

    // Sidebar category tags
    document.querySelectorAll('.tag[data-category]').forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;

            // Update nav active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

            // Filter articles
            currentCategory = category;
            displayedArticles = 0;
            renderArticlesGrid();

            // Scroll to articles
            document.getElementById('articles-grid').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
}

/**
 * Load and render single article
 */
function loadArticle(articleId) {
    const article = getArticleById(articleId);

    if (!article) {
        document.getElementById('article-header').innerHTML = `
            <h1>Artikkel ikke funnet</h1>
            <p>Beklager, vi fant ikke artikkelen du leter etter.</p>
            <p><a href="index.html" style="color: var(--color-primary);">Tilbake til forsiden</a></p>
        `;
        document.getElementById('article-image').style.display = 'none';
        document.getElementById('article-body').style.display = 'none';
        document.getElementById('related-articles').style.display = 'none';
        return;
    }

    // Update page title
    document.title = `${article.title} - TechPuls`;

    // Update Open Graph meta tags
    updateMetaTags(article);

    // Render article header
    document.getElementById('article-header').innerHTML = `
        <span class="article-category">${getCategoryDisplayName(article.category)}</span>
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span class="article-author">${article.author}</span>
            <span class="article-date">${formatDate(article.date)}</span>
        </div>
    `;

    // Render featured image
    document.getElementById('article-image').innerHTML = `
        <img src="${getImageUrl(article)}" alt="${article.imageAlt || article.title}">
    `;

    // Render article body
    document.getElementById('article-body').innerHTML = article.content;

    // Render related articles
    const related = getRelatedArticles(article.id, article.category, 3);
    if (related.length > 0) {
        document.getElementById('related-grid').innerHTML = related
            .map(a => createArticleCardHTML(a))
            .join('');
    } else {
        // If no related in same category, show recent articles
        const recent = getAllArticles()
            .filter(a => a.id !== article.id)
            .slice(0, 3);
        document.getElementById('related-grid').innerHTML = recent
            .map(a => createArticleCardHTML(a))
            .join('');
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
}

/**
 * Update meta tags for social sharing
 */
function updateMetaTags(article) {
    // Update or create meta tags
    const setMeta = (property, content) => {
        let meta = document.querySelector(`meta[property="${property}"]`) ||
            document.querySelector(`meta[name="${property}"]`);
        if (meta) {
            meta.setAttribute('content', content);
        }
    };

    setMeta('og:title', article.title);
    setMeta('og:description', article.excerpt);
    setMeta('og:image', getImageUrl(article));
    setMeta('og:url', window.location.href);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the homepage
    if (document.getElementById('hero-section')) {
        initHomepage();
    }
});
