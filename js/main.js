document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", function () {
      nav.classList.toggle("mobile-nav-active");
    });
  }

  // Dark mode toggle (if implemented)
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");

      // Save preference to localStorage
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("darkMode", isDark);
    });

    // Check for saved user preference
    const darkModePref = localStorage.getItem("darkMode");
    if (darkModePref === "true") {
      document.documentElement.classList.add("dark");
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Handle consultation booking buttons
  const bookButtons = document.querySelectorAll(".cta-button");
  bookButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Add your booking logic here
      console.log("Booking consultation...");
      // Example: You could open a modal, redirect to a booking page, etc.
    });
  });

  // Optional: Add animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add("visible");
      }
    });
  };

  // Optional: Initialize animations
  if (document.querySelector(".animate-on-scroll")) {
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check
  }
});
