document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }

  // Dark mode functionality
  function initializeDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDarkMode);
  }

  initializeDarkMode();

  // Floating button interaction
  const floatingButton = document.querySelector(".floating-button");
  if (floatingButton) {
    floatingButton.addEventListener("click", () => {
      window.location.href = "contact.html";
    });

    floatingButton.addEventListener("mouseover", () => {
      floatingButton.style.transform = "scale(1.05)";
    });

    floatingButton.addEventListener("mouseout", () => {
      floatingButton.style.transform = "scale(1)";
    });
  }

  // Publication card hover effects
  const publicationCards = document.querySelectorAll(".publication-card");
  publicationCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-0.25rem)";
      card.style.boxShadow = "0 20px 25px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

  // Pagination interaction
  const paginationLinks = document.querySelectorAll(".pagination-item");
  paginationLinks.forEach((link) => {
    if (!link.classList.contains("active")) {
      link.addEventListener("mouseenter", () => {
        link.style.backgroundColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--color-muted");
      });

      link.addEventListener("mouseleave", () => {
        link.style.backgroundColor = "";
      });
    }
  });

  // Social links hover effect
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-secondary");
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "";
    });
  });
});
