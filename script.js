document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form submission alert (Mock)
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });
});
