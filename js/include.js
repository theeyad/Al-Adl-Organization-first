// Component loader utility
class ComponentLoader {
  constructor() {
    this.loadedComponents = new Set();
  }

  /**
   * Fetch and inject HTML content into a target element
   * @param {string} path - Path to the HTML file
   * @param {string} targetId - ID of the target element
   * @param {string} componentName - Name of the component (for event dispatching)
   */
  async loadComponent(path, targetId, componentName) {
    try {
      const response = await fetch(path);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();

      const targetElement = document.getElementById(targetId);
      if (!targetElement)
        throw new Error(`Target element #${targetId} not found`);

      targetElement.innerHTML = html;
      this.loadedComponents.add(componentName);

      // Dispatch a custom event when the component is loaded
      const event = new CustomEvent("componentLoaded", {
        detail: { component: componentName },
      });
      document.dispatchEvent(event);
    } catch (error) {
      console.error(`Error loading ${componentName}:`, error);
    }
  }

  /**
   * Check if a specific component has been loaded
   * @param {string} componentName - Name of the component to check
   * @returns {boolean}
   */
  isComponentLoaded(componentName) {
    return this.loadedComponents.has(componentName);
  }
}

// Initialize the component loader
const loader = new ComponentLoader();

document.addEventListener("DOMContentLoaded", () => {
  // Get current page path to build correct base
  const basePath = window.location.pathname.includes("Al-Adl-Organization-first")
    ? "/Al-Adl-Organization-first/"
    : "/";

  loader.loadComponent(`${basePath}partials/header.html`, "header", "header");
  loader.loadComponent(`${basePath}partials/footer.html`, "footer", "footer");
});
