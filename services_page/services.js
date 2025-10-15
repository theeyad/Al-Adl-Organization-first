// Service descriptions data
const serviceDescriptions = {
  "full-representation": {
    title: "التمثيل القانوني الكامل",
    description: "",
  },
  investors: {
    title: "خدمات المستثمرين والأجانب",
    description: "خدمات قانونية شاملة للمستثمرين والأجانب في مصر",
    subServices: [
      {
        id: "investor-residence",
        title: "إقامة المستثمرين",
        description:
          "خدمات استخراج وتجديد إقامة المستثمر الأجنبي في مصر مع ضمان سرعة الإجراءات.",
      },
      {
        id: "company-establishment",
        title: "تأسيس الشركات",
        description:
          "المساعدة في تأسيس وتسجيل الشركات للمستثمرين الأجانب مع تقديم الاستشارات القانونية اللازمة.",
      },
      {
        id: "security-approvals",
        title: "الموافقات الأمنية",
        description:
          "المساعدة في الحصول على الموافقات الأمنية اللازمة للمستثمرين والأجانب.",
      },
      {
        id: "residence-renewal",
        title: "تجديد الإقامات",
        description:
          "خدمات تجديد إقامات المستثمرين والعاملين الأجانب بسهولة وسرعة.",
      },
      {
        id: "foreign-marriage",
        title: "إثبات زواج الأجانب",
        description:
          "خدمات توثيق وإثبات زواج الأجانب في مصر وفقاً للقوانين المصرية.",
      },
      {
        id: "document-authentication",
        title: "توثيق الأوراق من القنصليات والسفارات",
        description:
          "خدمات توثيق المستندات والأوراق الرسمية من القنصليات والسفارات.",
      },
      {
        id: "work-permit",
        title: "تصاريح العمل",
        description: "المساعدة في استخراج تصاريح العمل للأجانب في مصر.",
      },
      {
        id: "company-followup",
        title: "متابعة الشركات",
        description:
          "خدمات متابعة وإدارة الشؤون القانونية للشركات الأجنبية في مصر.",
      },
      {
        id: "new-branches",
        title: "تسجيل فروع الشركات الجديدة",
        description: "المساعدة في تسجيل وتأسيس فروع جديدة للشركات القائمة.",
      },
      {
        id: "foreign-branches",
        title: "تسجيل فروع الشركات الأجنبية",
        description:
          "خدمات تسجيل فروع الشركات الأجنبية في مصر مع تقديم كافة الاستشارات القانونية.",
      },
    ],
  },
  "new-cities": {
    title: "خدمات المدن الجديدة وهيئة المجتمعات العمرانية",
    description: "",
  },
  corporate: {
    title: "خدمات الشركات والنزاعات التجارية",
    description: "",
  },
  "egypt-saudi": {
    title: "خدمات الشركات في مصر والسعودية",
    description: "",
  },
  industrial: {
    title: "خدمات القطاع الصناعي",
    description: "",
  },
  "real-estate": {
    title: "قانون العقارات",
    description: "",
  },
  litigation: {
    title: "الخدمات القانونية والتقاضي",
    description: "",
  },
  family: {
    title: "قضايا الأسرة والأحوال الشخصية",
    description: "",
  },
  civil: {
    title: "القضايا المدنية",
    description: "",
  },
  criminal: {
    title: "قضايا الجنح والجنايات",
    description: "",
  },
  contracts: {
    title: "العقود والمذكرات القانونية",
    description: "",
  },
  "intellectual-property": {
    title: "الملكية الفكرية",
    description: "",
  },
  traffic: {
    title: "خدمات المرور",
    description: "",
  },
};

// Function to generate main service cards dynamically
function generateServiceCards() {
  const servicesGrid = document.querySelector(".services-grid");
  if (!servicesGrid) return;

  // Clear existing content
  servicesGrid.innerHTML = "";

  // Generate service cards for each service in serviceDescriptions
  Object.keys(serviceDescriptions).forEach((serviceId) => {
    const serviceInfo = serviceDescriptions[serviceId];
    if (!serviceInfo.title) return;

    // Define icons for each service
    const serviceIcons = {
      investors: "supervisor_account",
      "new-cities": "location_city",
      corporate: "corporate_fare",
      traffic: "directions_car",
      "egypt-saudi": "business",
      industrial: "factory",
      "real-estate": "real_estate_agent",
      litigation: "gavel",
      family: "family_restroom",
      civil: "account_balance",
      criminal: "security",
      contracts: "description",
      "intellectual-property": "lightbulb",
      "full-representation": "balance",
    };

    const icon = serviceIcons[serviceId] || "stars";

    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";
    serviceCard.id = `service-${serviceId}`;
    serviceCard.innerHTML = `
      <div class="service-content">
        <div class="service-icon-container">
          <span class="material-symbols-outlined service-icon">${icon}</span>
        </div>
        <h3 class="service-title">${serviceInfo.title}</h3>
        <p class="service-description">${
          serviceInfo.description || "خدمات قانونية متخصصة في هذا المجال"
        }</p>
        <a href="#" class="learn-more-link" data-service="${serviceId}">
          اعرف المزيد
          <span class="material-symbols-outlined arrow-icon">arrow_back</span>
        </a>
      </div>
    `;

    servicesGrid.appendChild(serviceCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Generate main service cards dynamically
  generateServiceCards();

  // Handle showing sub-services
  const servicesGrid = document.querySelector(".services-grid");
  const subServicesGrid = document.querySelector(".sub-services-grid");
  const servicesContainer = document.querySelector(".services-container");

  function showSubServices(serviceId) {
    const serviceInfo = serviceDescriptions[serviceId];
    if (!serviceInfo || !serviceInfo.subServices) return;

    // Create back button
    const backButton = document.createElement("button");
    backButton.className = "back-button";
    backButton.setAttribute(
      "onclick",
      "window.location.href='./services.html'"
    );
    backButton.innerHTML =
      '<span class="material-symbols-outlined">arrow_forward</span> رجوع';
    backButton.addEventListener("click", () => {
      subServicesGrid.classList.add("fade-out");
      setTimeout(() => {
        subServicesGrid.innerHTML = "";
        subServicesGrid.classList.add("hidden");
        servicesGrid.classList.remove("hidden");
        setTimeout(() => servicesGrid.classList.remove("fade-out"), 50);
      }, 300);
    });

    // Create sub-services cards
    const subServicesHTML = serviceInfo.subServices
      .map(
        (subService) => `
      <div class="service-card">
        <div class="service-content">
          <div class="service-icon-container">
            <span class="material-symbols-outlined service-icon">stars</span>
          </div>
          <h3 class="service-title">${subService.title}</h3>
          <p class="service-description">${subService.description}</p>
          <a href="#" class="learn-more-link" data-subservice-id="${subService.id}" data-parent-service="${serviceId}">
            احجز استشارة
            <span class="material-symbols-outlined arrow-icon">arrow_back</span>
          </a>
        </div>
      </div>
    `
      )
      .join("");

    // Show sub-services
    servicesGrid.classList.add("fade-out");
    setTimeout(() => {
      servicesGrid.classList.add("hidden");
      subServicesGrid.innerHTML = backButton.outerHTML + subServicesHTML;
      subServicesGrid.classList.remove("hidden");
      setTimeout(() => subServicesGrid.classList.remove("fade-out"), 50);

      // Add event listeners for sub-service cards
      subServicesGrid.querySelectorAll(".learn-more-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const subServiceId = link.getAttribute("data-subservice-id");
          const parentServiceId = link.getAttribute("data-parent-service");
          const parentService = serviceDescriptions[parentServiceId];
          const subService = parentService.subServices.find(
            (s) => s.id === subServiceId
          );

          if (subService) {
            modalTitle.textContent = subService.title;
            modalDescription.textContent = subService.description;
            modal.style.display = "block";
            setTimeout(() => modal.classList.add("active"), 10);
          }
        });
      });
    }, 300);
  }

  // Open sub-services view when clicking "Learn More"
  document.querySelectorAll(".learn-more-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const serviceId = this.getAttribute("data-service");
      if (serviceId) {
        showSubServices(serviceId);
      }
    });
  });

  // Mobile menu functionality
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", function () {
      nav.classList.toggle("mobile-nav-active");
    });
  }

  // Service card hover animations
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-0.25rem)";
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    });
  });

  // Learn more links hover effect
  const learnMoreLinks = document.querySelectorAll(".learn-more-link");
  learnMoreLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const arrow = this.querySelector(".arrow-icon");
      if (document.dir === "rtl") {
        arrow.style.transform = "translateX(-0.25rem)";
      } else {
        arrow.style.transform = "translateX(0.25rem)";
      }
    });

    link.addEventListener("mouseleave", function () {
      const arrow = this.querySelector(".arrow-icon");
      arrow.style.transform = "translateX(0)";
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

  // Optional: Add animation on scroll for service cards
  const animateOnScroll = function () {
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      if (cardTop < window.innerHeight && cardBottom > 0) {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  };

  // Initialize animations
  if (document.querySelector(".service-card")) {
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check
  }

  // Floating action button click handler
  const floatingButton = document.querySelector(".floating-action-button");
  if (floatingButton) {
    floatingButton.addEventListener("click", function () {
      // Add your contact form logic here
      console.log("Contact button clicked");
    });
  }
});
