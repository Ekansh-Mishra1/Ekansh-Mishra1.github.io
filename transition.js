document.addEventListener("DOMContentLoaded", () => {
    // Reveal body
    document.body.classList.add("fade-in");
    
    // Smooth transition for links
    document.querySelectorAll("nav a, .button").forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            // Only transition for internal .html links
            if (href && href.includes(".html")) {
                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            }
        });
    });
});
