// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Animate hamburger
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans[0].classList.toggle('rotate-down');
    spans[1].classList.toggle('fade-out');
    spans[2].classList.toggle('rotate-up');
});
