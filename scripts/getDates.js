// getDates.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and populate it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Get the last modified date and populate it in the footer
    const lastModified = new Date(document.lastModified);
    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = 'Last modified: ' + lastModified.toLocaleString();
});

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});


