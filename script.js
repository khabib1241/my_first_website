// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Color change button
    const colorBtn = document.getElementById("changeColorBtn");
    const colors = ["#4361ee", "#7209b7", "#3a86ff", "#4895ef", "#560bad"];
    
    colorBtn.addEventListener("click", function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty("--primary-color", randomColor);
        document.documentElement.style.setProperty("--secondary-color", darkenColor(randomColor, 20));
    });

    // Font size toggle button
    const fontSizeBtn = document.getElementById("fontSizeBtn");
    fontSizeBtn.addEventListener("click", function() {
        document.body.classList.toggle("large-text");
    });

    // Dark mode toggle (optional - could add another button)
    // const darkModeBtn = document.getElementById("darkModeBtn");
    // darkModeBtn.addEventListener("click", function() {
    //     document.body.classList.toggle("dark-mode");
    // });

    // Update copyright year
    document.getElementById("year").textContent = new Date().getFullYear();
});

function darkenColor(color, percent) {
    // Helper function to darken colors
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (
        0x1000000 +
        (R < 0 ? 0 : R) * 0x10000 +
        (G < 0 ? 0 : G) * 0x100 +
        (B < 0 ? 0 : B)
    ).toString(16).slice(1);
}
// Add this to your existing script.js
document.addEventListener("DOMContentLoaded", function() {
    // ... existing code ...
    
    // Background change button
    const bgBtn = document.getElementById("changeBgBtn");
    let bgCounter = 0;
    const bgClasses = ['background-1', 'background-2', 'background-3', 'background-4', 'background-5'];
    
    // Remove any existing background classes first
    function resetBackgroundClasses() {
        bgClasses.forEach(bgClass => {
            document.body.classList.remove(bgClass);
        });
    }
    
    bgBtn.addEventListener("click", function() {
        resetBackgroundClasses();
        bgCounter = (bgCounter + 1) % bgClasses.length;
        document.body.classList.add(bgClasses[bgCounter]);
    });
    
    // ... rest of your existing code ...
});
// Add to your existing script.js
document.addEventListener("DOMContentLoaded", function() {
    // ... existing code ...
    
    // Enhanced background changer
    const bgBtn = document.getElementById("changeBgBtn");
    let bgCounter = 0;
    const bgClasses = [
        'background-1',  // Default
        'background-2',  // Black gradient
        'background-3',  // Dark red gradient
        'background-4',  // Blue gradient
        'background-5',  // Space image
        'background-6'   // Deep red gradient
    ];
    
    bgBtn.addEventListener("click", function() {
        resetBackgroundClasses();
        bgCounter = (bgCounter + 1) % bgClasses.length;
        document.body.classList.add(bgClasses[bgCounter]);
        updateThemeForBackground();
    });
    
    // Dark Mode Toggle
    const darkModeBtn = document.getElementById("darkModeBtn");
    darkModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
    
    // Theme Color Changer (updated)
    const colorBtn = document.getElementById("changeColorBtn");
    const themes = [
        { primary: "#4361ee", secondary: "#3f37c9" }, // Default blue
        { primary: "#d00000", secondary: "#9d0208" }, // Dark red
        { primary: "#1a1a1a", secondary: "#000000" }, // Black
        { primary: "#7209b7", secondary: "#560bad" }  // Purple
    ];
    let themeCounter = 0;
    
    colorBtn.addEventListener("click", function() {
        themeCounter = (themeCounter + 1) % themes.length;
        const theme = themes[themeCounter];
        document.documentElement.style.setProperty("--primary-color", theme.primary);
        document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    });
    
    function resetBackgroundClasses() {
        bgClasses.forEach(bgClass => document.body.classList.remove(bgClass));
    }
    
    function updateThemeForBackground() {
        // Auto-switch to dark text on light backgrounds and vice versa
        if (bgCounter === 0) { // Default light background
            document.body.classList.remove("dark-mode", "dark-red-theme", "black-theme");
        } else {
            document.body.classList.add("dark-mode");
        }
    }
});