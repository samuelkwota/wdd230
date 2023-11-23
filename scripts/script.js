
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "💡";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menu = document.querySelector('.menu');

    // Toggle menu visibility on hamburger button click
    hamburgerBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
        // Change hamburger icon to 'X' when menu is open
        hamburgerBtn.innerHTML = (menu.classList.contains('show')) ? '&#10005;' : '&#8801;';
    });
});

 // JavaScript code for page visit counter using localStorage
 let counter = localStorage.getItem('pageCounter') || 0;
 counter++;
 localStorage.setItem('pageCounter', counter);
 document.getElementById('counter').innerText = counter;

 