document.addEventListener("DOMContentLoaded", function () {
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
  }

  // Update active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    // Handle both relative and absolute paths
    const linkPath = href.startsWith('./') ? href.substring(2) : href;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Check if the link matches the current page
    if (linkPath === currentPage ||
        (currentPage === '' && linkPath === 'index.html') ||
        (currentPage === '' && linkPath === './index.html')) {
      link.classList.add("active");
    }
  });

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
