// Wait for the header component to be loaded
document.addEventListener("componentLoaded", (event) => {
  if (event.detail.component === "header") {
    initializeHeader();
  }
});

/**
 * Initialize header functionality
 */
function initializeHeader() {
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector(".mobile-menu-button button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("mobile-nav-active");
      // Add aria-expanded attribute for accessibility
      const isExpanded = nav.classList.contains("mobile-nav-active");
      mobileMenuButton.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !nav.contains(e.target) &&
        !mobileMenuButton.contains(e.target) &&
        nav.classList.contains("mobile-nav-active")
      ) {
        nav.classList.remove("mobile-nav-active");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("mobile-nav-active")) {
        nav.classList.remove("mobile-nav-active");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      }
    });
  } // Update active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentPath)) {
      link.classList.add("active");
    }
  });
}
