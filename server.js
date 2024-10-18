const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');

const app = express();
const port = 3000;

// Middleware para processar os dados JSON
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos

// Configuração do banco de dados SQL Server
const dbConfig = {
    user: 'clientes',
    password: 'clientes',
    server: 'DESKTOP-305EHD8\\SQLEXPRESS',
    database: 'BDTESTE',
    options: {
        encrypt: true, // Se necessário
        trustServerCertificate: true // Se necessário
    }
};

// Rota de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Conecta ao SQL Server
        await sql.connect(dbConfig);

        // Executa a consulta para verificar as credenciais
        const result = await sql.query`SELECT * FROM usuarios WHERE email = ${email} AND senha = ${password}`;

        if (result.recordset.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
