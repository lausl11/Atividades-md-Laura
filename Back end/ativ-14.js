const express = require('express');
const app = express();

app.use(express.json());

app.post('/avisos', (req, res) => {
  const avisos = req.body;

  res.status(201).json({
    mensagem: 'seu pc vai explodir em 30seg'
  });
});

app.post('/tarefa', (req, res) => {
  const tarefas = req.body;

  res.status(201).json({
    mensagem: 'comprar frango pra semana'
  });
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;

  res.status(201).json({
    mensagem: 'Usuário recebido com sucesso',
    usuario: novoUsuario
  });
});

app.post('/reserva', (req, res) => {
  const reserva = req.body;

  res.status(201).json({
    mensagem: 'Lab318 reservado com sucesso!'
  });
});

app.post('/observacoes-noite', (req, res) => {
  const observacoes = req.body;

  res.status(201).json({
    mensagens: [
      'eu to com fome',
      'tem louça pra lavar',
      'meu fone ta sem bateria'
    ]
  });
});



app.listen(3000, () => {
  console.log('Servidor rodando');
});