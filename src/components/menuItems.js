const d = document;

export default function menuItems() {
  const menuItem = d.querySelectorAll('.menu-link');
  const menu = d.querySelector('.menu');
  const toggleMenu = d.querySelector('.toggle');

  menuItem.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      if (event.target.matches('.menu-link')) {
        menu.classList.toggle('menu--show');
        toggleMenu.setAttribute('src', 'src/assets/icons/toggle.svg');
      }
    });
  });
}
