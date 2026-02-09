// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Horizontal Scroll logic for Mouse Wheel
const panelContainer = document.querySelector('.panel-container');

panelContainer.addEventListener('wheel', (evt) => {
    if (window.innerWidth > 768) { // Only force horizontal on desktop
        evt.preventDefault();
        panelContainer.scrollLeft += evt.deltaY;
    }
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.icon');

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update Icon
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Scroll Reveal with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is vastly visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible to avoid re-triggering (kinetic, not chaotic)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .project-card, .skill-card').forEach(el => {
    // Add initial class for items that should animate
    // (Note: styles already handle .section-title, let's ensure others have transitions)
    observer.observe(el);
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links (polyfill support not strictly needed for modern browsers but good logical touch)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
