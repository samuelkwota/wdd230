document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menu = document.querySelector('.menu');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainContent = document.querySelector('main');

    // Toggle menu visibility on hamburger button click
    hamburgerBtn.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        mainContent.classList.toggle('dark-mode');
    });
});