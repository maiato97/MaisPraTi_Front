//MENU RESPONSIVO
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
menu.classList.toggle('open');
});

//MEMBROS
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[index].classList.add('ativo');
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Volta ao primeiro slide
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Vai para o último slide
    showSlide(currentIndex);
});

// Inicia o carrossel com o primeiro slide
showSlide(currentIndex);

//LASTEST RELEASES

const dataRetorno = new Date('2025-06-21T00:00:00').getTime();

const contagemRegressiva = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataRetorno - agora;

    // Cálculo do tempo restante
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Atualiza o contador na página
    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Se a contagem regressiva terminar
    if (distancia < 0) {
        clearInterval(contagemRegressiva);
        document.getElementById('contador').innerHTML = "O retorno aconteceu!";
    }
}, 1000);