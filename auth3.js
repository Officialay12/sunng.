// Optional: Add a confetti effect for celebration
const greetingContainer = document.querySelector('.greeting-container');

greetingContainer.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});