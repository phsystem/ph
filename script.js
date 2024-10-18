document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    const messageElement = document.getElementById('message');
    if (result.success) {
        window.location.href = '/geral.html'; // Redireciona para a próxima página após login
        <a href="geral.html">Página Principal</a>
    } else {
        messageElement.style.color = 'red';
        messageElement.innerText = 'Email ou senha incorretos!';
    }
});
