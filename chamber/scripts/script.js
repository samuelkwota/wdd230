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

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

