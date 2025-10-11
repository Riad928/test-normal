// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});
