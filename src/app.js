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