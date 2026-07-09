const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
    {id: 1, titulo: 'marcos' },
    {id: 2, titulo: 'mara' }
]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/ususarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    titulo: req.body.titulo
  };

  usuarios.push(usuarios);
  res.status(201).json(usuarios);
});

app.put('/usuarios/:id', (req, res) => {

    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        });
    }

    usuario.titulo = req.body.titulo;

    res.json(usuario);
});

app.get('/usuarios/:id', (req, res) => {

    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
});

let tarefas = [
    {id: 1, titulo: 'reabastecer impressoras'},
    {id: 2, titulo: 'terminar atividades maidel'}
]

app.get('tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1
    }

      tarefas.push(tarefas);
  res.status(201).json(tarefas);
}); 

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id);
  tarefas = tarefas.filter(item => item.id !== id);
  res.json({ mensagem: 'tarefa removida' });
});




app.listen(3000, () => {
  console.log('Servidor rodando');
});