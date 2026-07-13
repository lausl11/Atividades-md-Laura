// 1- em uma barra de pesquisa e em filtros de buscas
// 2- um cadastro novo, a publicação de um post
// 3- quando o servidor acessa a rede, mais nao encontra oque vc requisitou
// 4- é quando vc cria um cadastro novo, ali o servidor te retorna que foi criado com sucesso

POST /aviso HTTP/1.1
host: localhost:3000

{
  "titulo": "Reunião de Pais",
  "descricao": "A reunião ocorrerá no dia 20/07 às 19h.",
  "dataPublicacao": "2026-07-13"
}

HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 1,
  "titulo": "Reunião de Pais",
  "descricao": "A reunião ocorrerá no dia 20/07 às 19h.",
  "dataPublicacao": "2026-07-13",
  "mensagem": "Aviso cadastrado com sucesso."
}