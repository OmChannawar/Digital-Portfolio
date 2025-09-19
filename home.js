// Reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});