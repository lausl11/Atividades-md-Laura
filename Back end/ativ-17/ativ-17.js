const cors = require('cors');
app.use(cors());


const nomeInput = document.querySelector('#nome');
    const botao = document.querySelector('#enviar');
    const resultado = document.querySelector('#resultado');

    botao.addEventListener('click', async () => {
        const dados = { nome: nomeInput.value };
        try {
            const resposta = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });
            const retorno = await resposta.json();
            resultado.textContent = retorno.mensagem;
        } catch (erro) {
            resultado.textContent = 'Erro ao conectar com o servidor.'; [1]
        }
    });

      document.querySelector('#addTarefa').addEventListener('click', async () => {
        const descricao = document.querySelector('#tarefa').value;
        try {
            const res = await fetch('http://localhost:3000/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ descricao })
            });
            const data = await res.json();
            document.querySelector('#status').textContent = "Tarefa enviada!"; 
        } catch (e) {
            document.querySelector('#status').textContent = "Erro de conexão."; [1]
        }
    });

     document.querySelector('#carregar').addEventListener('click', async () => {
        const lista = document.querySelector('#listaAvisos');
        lista.innerHTML = ''; // Limpa a lista
        try {
            const resposta = await fetch('http://localhost:3000/avisos'); // GET por padrão [2]
            const avisos = await resposta.json();
            
            avisos.forEach(aviso => {
                const li = document.createElement('li');
                li.textContent = aviso.titulo;
                lista.appendChild(li);
            });
        } catch (erro) {
            console.error("Erro ao buscar avisos", erro);
        }
    });

     document.querySelector('#testar').addEventListener('click', async () => {
        const msg = document.querySelector('#msgErro');
        try {
            await fetch('http://localhost:3000/status');
            msg.textContent = ""; 
            alert("Servidor online!");
        } catch (erro) {
            // Captura erro de rede, como servidor desligado
            msg.textContent = 'Erro: O servidor não está respondendo. Verifique a conexão.'; [1, 2]
        }
    });

    const express = require('express');
const cors = require('cors'); // Necessário para permitir o acesso do front [1]
const app = express();

app.use(cors());
app.use(express.json());

let mensagens = [];

app.post('/mensagens', (req, res) => {
    const novaMsg = { id: mensagens.length + 1, texto: req.body.texto };
    mensagens.push(novaMsg);
    res.status(201).json({ mensagem: 'Mensagem recebida com sucesso!', objeto: novaMsg }); [1]
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

document.querySelector('#btnEnviar').addEventListener('click', async () => {
            const texto = document.querySelector('#textoMsg').value;
            const output = document.querySelector('#msgServidor');
            const detalhe = document.querySelector('#detalheObjeto');

            try {
                const res = await fetch('http://localhost:3000/mensagens', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ texto: texto }) [1, 2]
                });

                const retorno = await res.json(); // Converte resposta em objeto [2]
                output.textContent = retorno.mensagem;
                detalhe.textContent = "ID gerado: " + retorno.objeto.id;
            } catch (erro) {
                output.textContent = "Erro ao conectar com o back-end."; [1]
            }
        });