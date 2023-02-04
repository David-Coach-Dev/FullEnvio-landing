import toggleSVG from '../assets/icons/toggle.svg';

const d = document;

export default function menuItems() {
  const menuItem = d.querySelectorAll('.menu-link');
  const menu = d.querySelector('.menu');
  const toggleMenu = d.querySelector('.toggle');
  const toggle = d.querySelector('.account-toggle');

  menuItem.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      if (event.target.matches('.menu-link')) {
        menu.classList.toggle('menu--show');
        toggleMenu.setAttribute('src', toggleSVG);
        toggle.setAttribute('aria-label', 'abrir');
      }
    });
  });
}
