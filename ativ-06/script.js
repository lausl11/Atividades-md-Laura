function adicionarTarefa() {
            const input = document.getElementById('input-tarefa');
            const texto = input.value.trim();

            if (texto === '') return;

            const lista = document.getElementById('lista-tarefas');

            const card = document.createElement('div');
            card.className = 'card-tarefa';
            card.innerHTML = `
                <span class="tarefa-texto">${texto}</span>
                <div class="acoes">
                    <button class="btn-concluir" onclick="concluirTarefa(this)">Concluir</button>
                    <button class="btn-excluir" onclick="excluirTarefa(this)">Excluir</button>
                </div>
            `;

            lista.appendChild(card);
            input.value = '';
        }

        function concluirTarefa(botao) {
            const card = botao.parentElement.parentElement;
            card.classList.toggle('concluida');
        }

        function excluirTarefa(botao) {
            const card = botao.parentElement.parentElement;
            card.remove();
        }
