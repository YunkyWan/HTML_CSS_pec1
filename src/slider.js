const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide"); // Obtener todas las slides
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let currentIndex = 0; // Índice actual del slide
let slideInterval; // Variable para el intervalo

// Función para ir al siguiente slide
function goToNextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Volver al primer slide si llega al final
  }
  updateSlidePosition();
  resetSlideInterval(); // Reiniciar el temporizador
}

// Función para ir al slide anterior
function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Volver al último slide si está en el primero
  }
  updateSlidePosition();
  resetSlideInterval(); // Reiniciar el temporizador
}

// Función para actualizar la posición del slide
function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft = currentIndex * slideWidth;
}

// Función para avanzar automáticamente cada 5 segundos
function startSlideInterval() {
  slideInterval = setInterval(goToNextSlide, 5000);
}

// Función para reiniciar el temporizador
function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Agregar event listeners para los botones
nextButton.addEventListener("click", goToNextSlide);
prevButton.addEventListener("click", goToPrevSlide);

// Iniciar el pase automático de slides
startSlideInterval();