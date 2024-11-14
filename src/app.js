document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split('/').pop(); // Obtener el nombre del archivo actual
  const menuLinks = document.querySelectorAll(".p-navigation__link"); // Seleccionar todos los enlaces del menú

  menuLinks.forEach(link => {
    const href = link.getAttribute('href'); // Obtener el atributo href
    if (href) { // Verificar que href no sea null
      const linkPath = href.split('/').pop(); // Obtener el nombre del archivo del enlace

      if (linkPath === currentPath) {
        link.parentElement.classList.add("is-selected"); // Agregar clase 'is-selected' al enlace correspondiente
      } else {
        link.parentElement.classList.remove("is-selected"); // Asegurar que se remueva si no es la página actual
      }
    }
  });
});


function initNavigationSearch(element) {

  const menuButton = element.querySelector('.js-menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  function toggleMenu(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-menu-open')) {
      closeAll();
    } else {
      closeAll();
      openMenu(e);
    }
  }

  function toggleSearch(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    if (navigation.classList.contains('has-search-open')) {
      closeAll();
    } else {
      closeAll();
      openSearch(e);
    }
  }

  function openMenu(e) {
    e.preventDefault();
    var navigation = e.target.closest('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');
    var buttons = document.querySelectorAll('.js-menu-button');

    navigation.classList.add('has-menu-open');
    document.addEventListener('keyup', keyPressHandler);
  }

  function closeMenu() {
    var navigation = document.querySelector('.p-navigation');
    var nav = navigation.querySelector('.p-navigation__nav');
    var banner = document.querySelector('.p-navigation__banner');
    var buttons = document.querySelectorAll('.js-menu-button');

    buttons.forEach((searchButton) => {
      searchButton.removeAttribute('aria-pressed');
    });

    navigation.classList.remove('has-menu-open');
    document.removeEventListener('keyup', keyPressHandler);
  }

  function closeAll() {
    closeMenu();
  }

  function keyPressHandler(e) {
    if (e.key === 'Escape') {
      closeAll();
    }
  }
}

var navigation = document.querySelector('#navigation');
initNavigationSearch(navigation);