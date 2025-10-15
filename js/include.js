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

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Use fixed paths for GitHub Pages compatibility
  const scriptDir = document.querySelector('script[src*="include.js"]')?.src;
  const scriptPath = scriptDir
    ? scriptDir.substring(0, scriptDir.lastIndexOf("/") + 1)
    : "";
  const rootPath = scriptPath.replace("/js/", "/");

  loader.loadComponent(`${rootPath}partials/header.html`, "header", "header");
  loader.loadComponent(`${rootPath}partials/footer.html`, "footer", "footer");
});
