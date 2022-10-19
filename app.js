const navMenu = document.getElementById('navmenu');

const ham = document.getElementById('ham');
ham.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.toggle('hidden');
});

const hamX = document.getElementById('portfolio-nav-x');
hamX.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.toggle('hidden');
});

const navA = document.querySelectorAll('nav-menu-item');
navA.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.add('hidden');
});
