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


