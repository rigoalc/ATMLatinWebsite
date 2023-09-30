// Add JavaScript functionality here, such as handling form submissions or adding dynamic content.
// You can use JavaScript frameworks like jQuery or vanilla JavaScript, depending on your preference.

// Example: Add a smooth scrolling effect for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = targetElement.getBoundingClientRect().top;
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }
});