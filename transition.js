document.addEventListener("DOMContentLoaded", () => {
    const textToType = "ekansh-mishra1.github.io";
    const typedElement = document.getElementById("typed-url");
    const splash = document.getElementById("search-splash");
    const mainContent = document.getElementById("main-content");
    let i = 0;

    // Check if the user has already seen the animation in this session
    const hasSeenAnimation = sessionStorage.getItem("animationPlayed");

    if (typedElement && !hasSeenAnimation) {
        // FIRST TIME ENTRY: Run the typing animation
        function type() {
            if (i < textToType.length) {
                typedElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, 90);
            } else {
                setTimeout(() => {
                    splash.style.transform = "translateY(-100%)";
                    mainContent.style.opacity = "1";
                    // Record that the animation has now been played
                    sessionStorage.setItem("animationPlayed", "true");
                }, 600);
            }
        }
        type();
    } else {
        // RETURNING TO HOME or OTHER PAGES: Skip animation entirely
        if (splash) {
            splash.style.display = "none"; // Remove the splash screen immediately
        }
        if (mainContent) {
            mainContent.style.opacity = "1"; // Show content instantly
            mainContent.style.transition = "none"; 
        }
        // Ensure body is visible for sub-pages
        document.body.style.opacity = "1";
    }
});
