
const campoTarefa = document.querySelector('#tarefa');
const botao = document.querySelector('#botao');
const lista = document.querySelector('#lista');

botao.addEventListener('click', () => {

    const texto = campoTarefa.value.trim();

    if (texto === '') {
        alert('Digite uma tarefa');
        return;
    }

    const item = document.createElement('li');
    item.textContent = texto;

    lista.appendChild(item);

    alert('Tarefa adicionada com sucesso!');

    campoTarefa.value = '';
});



const campoAluno = document.querySelector('#aluno');
const mostrar = document.querySelector('#mostrar');
const resultado = document.querySelector('#resultado');

mostrar.addEventListener('click', () => {
    resultado.textContent = campoAluno.value;
});



const campoNome = document.querySelector('#nome');
const enviar = document.querySelector('#enviar');

enviar.addEventListener('click', () => {

    if (campoNome.value.trim() === '') {
        alert('Preencha o campo!');
        return;
    }

    alert('Enviado com sucesso!');
});