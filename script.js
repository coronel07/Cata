const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let currentSlideIndex = 0;

const updateSlides = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('left', 'right', 'current');
        
        // Asignamos clases para controlar el tamaño y posición de las imágenes
        if (index === currentSlideIndex) {
            slide.classList.add('current');
        } else if (index === (currentSlideIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('left');
        } else if (index === (currentSlideIndex + 1) % slides.length) {
            slide.classList.add('right');
        }
    });

    // Centramos la imagen actual en la vista
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;
};

rightButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
});

leftButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
});

updateSlides();



// Code for opening cards
const card = document.getElementById("love-letter");
const message = card.querySelector(".message");

card.addEventListener("click", () => {
    card.classList.toggle("open"); // Alterna la clase para el efecto de apertura
});

const gift = document.getElementById("gift");
const giftMessage = gift.querySelector(".message");

gift.addEventListener("click", () => {
    gift.classList.toggle("open"); // Alterna la clase para el efecto de apertura
});

// Countdown timer
const startDate = new Date('2024-07-19T00:00:00'); // Fecha de inicio
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date(); // Fecha actual
    const elapsed = now - startDate; // Tiempo transcurrido en milisegundos

    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;
    const secondsInMonth = secondsInDay * 30; // Aproximación
    const secondsInYear = secondsInDay * 365; // Aproximación

    const years = Math.floor(elapsed / (secondsInYear * 1000));
    const months = Math.floor((elapsed % (secondsInYear * 1000)) / (secondsInMonth * 1000));
    const days = Math.floor((elapsed % (secondsInMonth * 1000)) / (secondsInDay * 1000));
    const hours = Math.floor((elapsed % (secondsInDay * 1000)) / (secondsInHour * 1000));
    const minutes = Math.floor((elapsed % (secondsInHour * 1000)) / (secondsInMinute * 1000));
    const seconds = Math.floor((elapsed % (secondsInMinute * 1000)) / 1000);

    // Actualiza el contador en el HTML
    countdownElement.innerHTML = `${years} años, ${months} meses, ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);
