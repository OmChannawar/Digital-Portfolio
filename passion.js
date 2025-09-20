// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // ----- Mobile Menu Toggle -----
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  // ----- Scroll Reveal for Certificates -----
  const certificateItems = document.querySelectorAll(".certificate-item");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // how early before element enters viewport

    certificateItems.forEach(item => {
      const elementTop = item.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        item.classList.add("show");
      }
    });
  }

  // Run on scroll + initial check
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
