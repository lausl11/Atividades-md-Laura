{
    "titulo": "atv de portugues",
    "descrisao": "escrever um texto",
    "Data": "2/3"
}
{
    "id": "1", "tarefa": "limpar coco do cachorro",
    "id": "2", "tarefa": "tarefa de portugues"
}

POST /LOGIN HTTP/1.1
host: localhost:3000
content-type: application/json
{
    "email": "ugauga@gamil.com",
    "senha": "123456"
}

HTTP/1.1 201 Created
Content-Type: application/json

{
  "mensagem": "Usuário cadastrado com sucesso",
  "id": 3
}

// 4- o servidor retorna que o que vc solicitou foi criado ou sucesso, como um login cadastrado

// Acessar a página de cadastro.
// Preencher o formulário com os dados solicitados (nome, e-mail, senha, etc.).
// Clicar no botão "Cadastrar".
// O navegador coleta os dados informados.
// O cliente envia uma requisição HTTP POST para o servidor.
// O servidor recebe a requisição.
// O servidor valida os dados recebidos.
// O servidor verifica se o usuário já existe.
// Se os dados forem válidos, o servidor processa o cadastro.
// Os dados são armazenados no banco de dados.
// O servidor gera uma resposta HTTP.
// A resposta é enviada ao cliente.
// O navegador recebe a resposta.
// O sistema exibe uma mensagem de sucesso ou erro ao usuário.
// Em caso de sucesso, o usuário pode ser redirecionado para a página de login ou área inicial.
