// script.js
function mostrarPagina(pagina) {
    // Esconde todas as páginas
    document.getElementById('pagina1').style.display = 'none';
    document.getElementById('pagina2').style.display = 'none';

    // Mostra a página selecionada
    document.getElementById(pagina).style.display = 'flex';
}
