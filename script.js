// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // ปิดเมนูเมื่อคลิกลิงก์
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });
}

// ===== Active nav link =====
let currentPage = window.location.pathname.split('/').pop();
if (currentPage === '') currentPage = 'index.html';

document.querySelectorAll('.nav-links a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
