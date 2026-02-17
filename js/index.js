document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const moblieMenu = document.getElementById("mobile-menu");
    document.getElementById("hamburger-group").addEventListener("click", () => {
        if (moblieMenu.style.display === "none" || moblieMenu.style.display === "") {
            moblieMenu.style.display = "flex";
        } else {
            moblieMenu.style.display = "none";
        }
    });

    // Cart is now managed by cart.js
    // No need for localStorage management here anymore!
});