document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in class to body
    document.body.classList.add("fade-in");

    // Handle all internal links for fade-out
    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = link.getAttribute("href");
            const isInternal = target && !target.startsWith("#") && !link.target && !target.includes("mailto:") && !target.includes("tel:");

            if (isInternal) {
                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = target;
                }, 400); 
            }
        });
    });
});
