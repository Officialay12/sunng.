// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your form submission logic, e.g., sending data to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});
// Select the section element
const section = document.getElementById('animated-section');

// Variables for movement
let posX = 0;
let posY = 0;
let speedX = 2;
let speedY = 2;

// Function to move the section
function moveSection() {
    // Get the dimensions of the viewport and the section
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const sectionWidth = section.offsetWidth;
    const sectionHeight = section.offsetHeight;

    // Update the position
    posX += speedX;
    posY += speedY;

    // Reverse direction if the section hits the edges
    if (posX + sectionWidth >= viewportWidth || posX <= 0) {
        speedX = -speedX;
    }
    if (posY + sectionHeight >= viewportHeight || posY <= 0) {
        speedY = -speedY;
    }

    // Apply the new position
    section.style.transform = `translate(${posX}px, ${posY}px)`;

    // Request the next animation frame
    requestAnimationFrame(moveSection);
}

// Start the animation
moveSection();