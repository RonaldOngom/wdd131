// Initialize execution when document structure is ready
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Dynamic Footer Dates Setup ---
    const currentYearSpan = document.getElementById("currentYear");
    const lastModifiedParagraph = document.getElementById("lastModified");
    
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    // --- Mobile Hamburger Menu Interactions Toggle ---
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            // Toggle element classes to handle CSS visibility states
            menuButton.classList.toggle("open");
            navMenu.classList.toggle("open");
            
            // Set explicit global accessibility attributes 
            const isExpanded = menuButton.classList.contains("open");
            menuButton.setAttribute("aria-expanded", isExpanded);
        });
    }
});