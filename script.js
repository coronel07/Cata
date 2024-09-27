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
// Contador desde el 19 de julio de 2024
const startDate = new Date('2024-07-19T00:00:00'); // Fecha de inicio
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
    const now = new Date(); // Fecha actual
    const elapsed = now - startDate; // Tiempo transcurrido en milisegundos
    // Cálculo de los diferentes componentes de tiempo
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

//carrusel
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.opacity = "0.6";
        slide.style.transform = "scale(0.8)";
    });

    let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    let nextIndex = (currentIndex + 1) % totalSlides;

    slides[currentIndex].style.opacity = "0.6";
    slides[currentIndex].style.transform = "scale(0.8)";
    slides[currentIndex].classList.add('active');

    slides[prevIndex].style.opacity = "0.6";
    slides[prevIndex].style.transform = "scale(0.8)";
    slides[prevIndex].classList.remove('active');

    slides[nextIndex].style.opacity = "1";
    slides[nextIndex].style.transform = "scale(1)";
    slides[nextIndex].classList.remove('active');

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
});

updateSlides();
