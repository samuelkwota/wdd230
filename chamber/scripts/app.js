// Update visit message based on the last visit
document.addEventListener('DOMContentLoaded', function () {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const oneDayMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const visitMessage = document.getElementById('visitMessage');

    if (!lastVisit) {
        // First visit
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / oneDayMilliseconds);

        if (daysSinceLastVisit === 0) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else {
            const pluralize = daysSinceLastVisit === 1 ? 'day' : 'days';
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${pluralize} ago.`;
        }
    }

    // Update last visit date in LocalStorage
    localStorage.setItem('lastVisit', currentDate);
});

// Lazy loading for images
document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.main-content img');

    images.forEach(img => {
        if (img.offsetTop < (window.innerHeight + window.scrollY) && !img.loaded) {
            img.src = img.getAttribute('src');
            img.classList.add('loaded');
            img.loaded = true;
        }
    });
});