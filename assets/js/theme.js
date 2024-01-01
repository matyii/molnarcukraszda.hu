function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('currentTheme', theme);
}

function getCurrentTheme() {
    return localStorage.getItem('currentTheme') || 'white';
}

document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);

    const dropdown = document.getElementById('themeDropdown');
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        if (item.getAttribute('data-theme') === currentTheme) {
            item.classList.add('active');
        }

        item.addEventListener('click', function(event) {
            const selectedTheme = event.target.getAttribute('data-theme');
            setTheme(selectedTheme);

            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });
});

const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('click', function() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});