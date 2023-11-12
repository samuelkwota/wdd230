document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menu = document.querySelector('.menu');

    // Toggle menu visibility on hamburger button click
    hamburgerBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
        // Change hamburger icon to 'X' when menu is open
        hamburgerBtn.innerHTML = (menu.classList.contains('show')) ? '&#10005;' : '&#8801;';
    });

    // Dynamically update the last modification date
    const modificationDate = new Date(document.lastModified);
    document.getElementById('modificationDate').textContent = modificationDate.toDateString();
});