/* app.js - Core Web Application Logic for CBSE CS Hub */

(function () {
    'use strict';

    // --- Theme Management ---
    const THEME_KEY = 'cbse_cs_theme';

    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);

        const iconEl = document.getElementById('themeIcon');
        const textEl = document.getElementById('themeText');
        if (iconEl && textEl) {
            if (theme === 'dark') {
                iconEl.textContent = '☀️';
                textEl.textContent = 'Light';
            } else {
                iconEl.textContent = '🌙';
                textEl.textContent = 'Dark';
            }
        }
    }

    function initTheme() {
        const currentTheme = getSavedTheme();
        applyTheme(currentTheme);

        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                const active = document.documentElement.getAttribute('data-theme');
                const nextTheme = active === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme);
            });
        }
    }

    // --- Dynamic Search & Filter Logic (Main Dashboard) ---
    function initSearchAndFilter() {
        const searchInput = document.getElementById('searchInput');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.card');
        const noResults = document.getElementById('noResults');

        if (!cards.length) return; // Not on dashboard page

        let activeFilter = 'all';

        function filterCards() {
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            let visibleCount = 0;

            cards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const tags = card.getAttribute('data-tags') || '';
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.card-desc')?.textContent.toLowerCase() || '';

                // Category match
                let matchesCategory = false;
                if (activeFilter === 'all') {
                    matchesCategory = true;
                } else if (activeFilter === 'class11') {
                    matchesCategory = category.includes('class11');
                } else if (activeFilter === 'class12') {
                    matchesCategory = category.includes('class12');
                } else if (activeFilter === 'interactive') {
                    matchesCategory = category.includes('interactive');
                }

                // Text search query match
                let matchesQuery = true;
                if (query) {
                    matchesQuery = title.includes(query) || desc.includes(query) || tags.includes(query);
                }

                if (matchesCategory && matchesQuery) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }

            if (clearSearchBtn) {
                clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', filterCards);
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', function () {
                searchInput.value = '';
                filterCards();
                searchInput.focus();
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                activeFilter = this.getAttribute('data-filter');
                filterCards();
            });
        });
    }

    // --- Sub-page Universal Header Injection ---
    function initSubPageHeader() {
        const topHeader = document.querySelector('.app-header');
        if (!topHeader) return;

        // Render theme button into app-header if not already present
        if (!topHeader.querySelector('#themeToggleBtn')) {
            const themeBtnHtml = `
                <button class="theme-toggle" id="themeToggleBtn" aria-label="Toggle theme">
                    <span id="themeIcon">🌙</span> <span id="themeText">Dark</span>
                </button>
            `;
            topHeader.insertAdjacentHTML('beforeend', themeBtnHtml);
            initTheme();
        }
    }

    // Initialize scripts on DOM Content Loaded
    document.addEventListener('DOMContentLoaded', function () {
        initTheme();
        initSearchAndFilter();
        initSubPageHeader();
    });

})();
