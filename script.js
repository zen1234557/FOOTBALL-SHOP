const themeToggle = document.getElementById('theme-toggle');
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const htmlElement = document.documentElement;

// 1. Toggle Search Bar
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchBar.focus();
});

// 2. Toggle Dark/Light Mode
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
});

// styling part for those clickable button under trustable brands section

// Selecting all brand items
const brandItems = document.querySelectorAll('.brand-item');

brandItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active-brand' from all others first (optional)
        brandItems.forEach(i => i.style.background = "");
        brandItems.forEach(i => i.style.color = "");

        // Apply permanent change for this click
        this.style.background = "var(--accent-color)";
        this.style.color = "#ffffff";
    });
});