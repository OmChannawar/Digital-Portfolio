document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    // Check that elements exist
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});