// Progressive enhancement and interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for chapter navigation
    const chapterLinks = document.querySelectorAll('.chapter-link, .nav-btn');
    chapterLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add loading state
            const originalText = this.textContent;
            this.textContent = '로딩 중...';
            this.style.pointerEvents = 'none';

            // Restore after short delay (in case navigation is fast)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to cards and sections
    const animatedElements = document.querySelectorAll(
        '.chapter-card, .benefit-item, .audience-item, .chapter-item, .reader-card, .benefit-card, .approach-card'
    );

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Mobile navigation enhancement
    const nav = document.querySelector('.nav');
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '☰';
    navToggle.classList.add('nav-toggle');
    navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #2c3e50;
        padding: 0.5rem;
    `;

    // Add mobile nav toggle
    if (window.innerWidth <= 768) {
        nav.insertBefore(navToggle, nav.querySelector('.nav-list'));
        navToggle.style.display = 'block';

        const navList = document.querySelector('.nav-list');
        navList.style.display = 'none';

        navToggle.addEventListener('click', function() {
            if (navList.style.display === 'none') {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.right = '0';
                navList.style.backgroundColor = 'white';
                navList.style.padding = '1rem';
                navList.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                this.innerHTML = '✕';
            } else {
                navList.style.display = 'none';
                this.innerHTML = '☰';
            }
        });
    }

    // Enhanced reading progress indicator for chapter pages
    if (document.querySelector('.chapter-content')) {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #2980b9);
            z-index: 1000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Book cover 3D effect enhancement
    const bookCovers = document.querySelectorAll('.book-cover, .book-cover-large');
    bookCovers.forEach(cover => {
        cover.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        cover.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // Enhanced chapter navigation with keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (document.querySelector('.chapter-content')) {
            const currentChapter = parseInt(window.location.pathname.split('/chapter/')[1]);

            if (e.key === 'ArrowLeft' && currentChapter > 1) {
                window.location.href = `/chapter/${currentChapter - 1}`;
            } else if (e.key === 'ArrowRight' && currentChapter < 10) {
                window.location.href = `/chapter/${currentChapter + 1}`;
            } else if (e.key === 'Escape') {
                window.location.href = '/chapters';
            }
        }
    });

    // Add tooltips for keyboard shortcuts
    if (document.querySelector('.chapter-content')) {
        const tooltip = document.createElement('div');
        tooltip.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(44, 62, 80, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 0.8rem;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        tooltip.innerHTML = '키보드 단축키: ← 이전 챕터 | → 다음 챕터 | ESC 목차';
        document.body.appendChild(tooltip);

        // Show tooltip on first visit
        setTimeout(() => {
            tooltip.style.opacity = '1';
            setTimeout(() => {
                tooltip.style.opacity = '0';
            }, 3000);
        }, 1000);

        // Show tooltip on hover over navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            btn.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }

    // Enhanced search functionality (simple implementation)
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        z-index: 2000;
        display: none;
        min-width: 300px;
    `;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '챕터 제목이나 키워드 검색...';
    searchInput.style.cssText = `
        width: 100%;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        margin-bottom: 1rem;
    `;

    const searchResults = document.createElement('div');
    searchResults.style.cssText = `
        max-height: 200px;
        overflow-y: auto;
    `;

    const closeSearch = document.createElement('button');
    closeSearch.innerHTML = '✕';
    closeSearch.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #999;
    `;

    searchContainer.appendChild(closeSearch);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchResults);
    document.body.appendChild(searchContainer);

    // Add search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 1999;
        display: none;
    `;
    document.body.appendChild(searchOverlay);

    // Search functionality
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchContainer.style.display = 'block';
            searchOverlay.style.display = 'block';
            searchInput.focus();
        }
        if (e.key === 'Escape') {
            searchContainer.style.display = 'none';
            searchOverlay.style.display = 'none';
        }
    });

    closeSearch.addEventListener('click', function() {
        searchContainer.style.display = 'none';
        searchOverlay.style.display = 'none';
    });

    searchOverlay.addEventListener('click', function() {
        searchContainer.style.display = 'none';
        searchOverlay.style.display = 'none';
    });

    // Performance optimization: Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Dark mode toggle (for future enhancement)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #2c3e50;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 3px 15px rgba(0,0,0,0.2);
    `;

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    document.body.appendChild(darkModeToggle);

    console.log('홀로서기 심리학 웹사이트가 로드되었습니다. 즐거운 독서 되세요! 📚');
});