document.addEventListener("DOMContentLoaded", () => {
    const textToType = "ekansh-mishra1.github.io";
    const typedElement = document.getElementById("typed-url");
    const splash = document.getElementById("search-splash");
    const mainContent = document.getElementById("main-content");
    let i = 0;

    // 1. Check if we are on index.html and need the animation
    if (typedElement) {
        function typeEffect() {
            if (i < textToType.length) {
                typedElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    splash.style.transform = "translateY(-100%)";
                    mainContent.style.opacity = "1";
                }, 800);
            }
        }
        setTimeout(typeEffect, 500);
    } else {
        // For other pages, just show content immediately
        document.body.style.opacity = "1";
    }

    // 2. Smooth Navigation Transitions
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            const destination = link.getAttribute("href");
            if (destination.includes(".html")) {
                e.preventDefault();
                document.body.style.transition = "opacity 0.4s";
                document.body.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = destination;
                }, 400);
            }
        });
    });
});
