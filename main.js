// Minimal JS entry point
console.log('Azhar Kheraj - Portfolio Loaded');

// Spotlight Effect
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty('--mouse-x', `${x}px`);
        item.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Smooth Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
        } else {
            // Optional: remove animation class when scrolling back up
            // This allows re-animation if user scrolls back
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('animate-out');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
