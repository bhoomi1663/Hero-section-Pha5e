// GSAP animations for the hero section
gsap.to(".hero-title", { duration: 1, opacity: 1, y: 0, delay: 0.5 });
gsap.to(".hero-subtitle", { duration: 1, opacity: 1, y: 0, delay: 1 });
gsap.to(".btn", { duration: 1, opacity: 1, y: 0, delay: 1.5 });

// Mouse movement effect
document.addEventListener('mousemove', (e) => {
    const heroSection = document.querySelector('.hero-section');
    const { clientX: mouseX, clientY: mouseY } = e;

    heroSection.style.transform = `translate(${(mouseX / window.innerWidth - 0.5) * 20}px, ${(mouseY / window.innerHeight - 0.5) * 20}px)`;
});
