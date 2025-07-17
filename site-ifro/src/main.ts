import './style.css';

const toggle = document.getElementById('menuToggle') as HTMLElement;
const menu = document.getElementById('menu') as HTMLElement;
const menuIcon = toggle.querySelector('.menu-icon') as HTMLImageElement;
const closeIcon = toggle.querySelector('.close-icon') as HTMLImageElement;

// Inicialmente exibe apenas o ícone de menu
menuIcon.style.display = 'block';
closeIcon.style.display = 'none';

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');

  // Alterna ícones
  menuIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});
