
// script.js
function mostrarPagina(pagina) {
    // Esconde todas as páginas
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';

    // Mostra a página selecionada
    document.getElementById(pagina).style.display = 'flex';
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('closed')) {
        menu.classList.remove('closed');
    } else {
        menu.classList.add('closed');
    }
}

// Slideshow automático
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}
