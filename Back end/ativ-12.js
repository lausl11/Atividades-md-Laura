const express = require('express');
const app = express();

const usuarios = [
  'victor da de costa',
  'victor cheranel',
  'bucetaura'
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});




const utarefas = [
  'limpar a casa',
  'encher o saco do victor',
  'dormir'
];

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});




const reservas = [
  'sala 120',
  'lab 318 exclusivamente do ds',
  'lab/inferno de matematica'
];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});


app.get('/status' , (req, res) => {
    res.json({
        mensagem: 'sistema ativo'
    });
});


const turmas = [
  '1ds',
  '2ds',
  '3ds'
];

app.get('/turmas', (req, res) => {
  res.json(reservas);
});




app.listen(3000, () => {
  console.log('servidor rodando');
});