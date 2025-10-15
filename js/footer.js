// Wait for the footer component to be loaded
document.addEventListener("componentLoaded", (event) => {
  if (event.detail.component === "footer") {
    initializeFooter();
  }
});

/**
 * Initialize footer functionality
 */
function initializeFooter() {
  // Update copyright year
  const yearElement = document.querySelector(".copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Initialize social media links hover effects
  const socialLinks = document.querySelectorAll(".social-links a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}
