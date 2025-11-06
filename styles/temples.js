// Dynamic Footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburgerBtn');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.textContent = isOpen ? 'Close' : 'Menu';
    hamburger.setAttribute('aria-expanded', isOpen);
});