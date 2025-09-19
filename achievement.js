// Select all achievement cards
const items = document.querySelectorAll(".achievement-item");

// IntersectionObserver to trigger animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, { threshold: 0.2 });

// Observe each item
items.forEach(item => {
    observer.observe(item);
});