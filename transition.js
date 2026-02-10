document.addEventListener("DOMContentLoaded", () => {
    const textToType = "ekansh-mishra1.github.io";
    const typedElement = document.getElementById("typed-url");
    const splash = document.getElementById("search-splash");
    const mainContent = document.getElementById("main-content");
    let i = 0;

    // Check if animation has already played in this session
    const hasSeenAnimation = sessionStorage.getItem("animationPlayed");

    if (typedElement && !hasSeenAnimation) {
        // Run Animation
        function type() {
            if (i < textToType.length) {
                typedElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, 90);
            } else {
                setTimeout(() => {
                    splash.style.transform = "translateY(-100%)";
                    mainContent.style.opacity = "1";
                    // Save to session storage so it doesn't run again
                    sessionStorage.setItem("animationPlayed", "true");
                }, 600);
            }
        }
        type();
    } else {
        // Skip Animation: Immediately show content
        if (splash) splash.style.display = "none";
        if (mainContent) {
            mainContent.style.opacity = "1";
            mainContent.style.transition = "none"; // Remove delay for instant load
        }
        document.body.style.opacity = "1";
    }
});
