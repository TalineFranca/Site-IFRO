import './style.css'

const toggle = document.getElementById('menuToggle') as HTMLElement;
const menu = document.getElementById('menu') as HTMLElement;
const menuIcon = toggle.querySelector('.icone-menu') as HTMLImageElement;
const closeIcon = toggle.querySelector('.icone-fechar') as HTMLImageElement;

menuIcon.style.display = 'block';
closeIcon.style.display = 'none';

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});
