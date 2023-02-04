const d = document;

export default function btnToggle() {
  const toggle = d.querySelector('.account-toggle');
  const toggleMenu = d.querySelector('.toggle');
  const menu = d.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('menu--show');

    if (menu.classList.contains('menu--show')) {
      toggle.setAttribute('aria-label', 'cerrar');
      toggleMenu.setAttribute('src', 'src/assets/icons/close.svg');
    } else {
      toggle.setAttribute('aria-label', 'abrir');
      toggleMenu.setAttribute('src', 'src/assets/icons/toggle.svg');
    }
  });
}
