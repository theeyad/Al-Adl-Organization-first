// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", function () {
      nav.classList.toggle("mobile-nav-active");
    });
  }
});

// Form submission handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        message: document.querySelector("#message").value,
      };

      // Here you would typically send the form data to your server
      // For now, we'll just log it to console
      console.log("Form submitted:", formData);

      // Show success message (you can customize this)
      alert("تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.");

      // Reset form
      contactForm.reset();
    });
  }
});

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Dark mode toggle functionality (if needed)
// Uncomment and modify this section if you want to implement dark mode
/*
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            // Save preference to localStorage
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
        });
        
        // Check for saved user preference
        const darkModePref = localStorage.getItem('darkMode');
        if (darkModePref === 'true') {
            document.body.classList.add('dark');
        }
    }
});
*/
