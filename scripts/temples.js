const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#site-navigation');

if (menuButton && navigation) {
  const toggleMenu = () => {
    navigation.classList.toggle('open');
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.classList.toggle('open');
  };

  menuButton.addEventListener('click', toggleMenu);

  document.querySelectorAll('#site-navigation a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navigation.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}
