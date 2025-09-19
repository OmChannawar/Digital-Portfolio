document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Scroll animations
  // =========================
  const scrollItems = document.querySelectorAll(".achievement-item, .reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add animation class
          obs.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.2 } // 20% visible triggers animation
  );

  scrollItems.forEach((item) => observer.observe(item));

  // =========================
  // Mobile menu toggle
  // =========================
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});