// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add a simple typing effect to the header tagline
const tagline = "Software Developer | Cloud Engineer | Freelancer";
let i = 0;
const taglineElement = document.querySelector("header p");

function typeEffect() {
    if (i < tagline.length) {
        taglineElement.textContent += tagline.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// Clear existing text and start typing effect on load
window.onload = function() {
    taglineElement.textContent = "";
    typeEffect();
};
