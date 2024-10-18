// script.js
function mostrarPagina(pagina) {
    // Esconde todas as páginas
    document.getElementById('sistema').style.display = 'none';
    document.getElementById('parceiros').style.display = 'none';
    document.getElementById('geral').style.display = 'none';

    // Mostra a página selecionada
    document.getElementById(pagina).style.display = 'flex';
}
