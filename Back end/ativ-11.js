const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('BEM VINDO');
});

app.listen(3000, () => {
  console.log('BEM VINDO');
}); 



app.get('/sobre', (req, res) => {
  res.send('sobre');
});

app.listen(3000, () => {
  console.log('o projeto consiste em um site para mostrar ocmo o gcep é ruim');
}); 



app.get('/equipe', (req, res) => {
  res.send('equipe');
});

app.listen(3000, () => {
  console.log('oia, o grupo é comspoto por eu, e um sabor ser humano que se chama victor');
}); 
 


app.get('/contato', (req, res) => {
  res.send('contado');
});

app.listen(3000, () => {
  console.log('voce, ususario interresado em pegar marmitas do gcep, pare!, pois elas ja estao dando pra 30 seres difenretes, vc sera so mais um');
}); 



app.get('/marmitas', (req, res) => {
  res.send('marmitas');
});

app.listen(3000, () => {
  console.log('manuela, bordignon, etc');
}); 



app.get('/reclamações', (req, res) => {
  res.send('reclamações');
});

app.listen(3000, () => {
  console.log('o gcep é um merda');
}); 



app.get('/batata', (req, res) => {
  res.send('batata');
});

app.listen(3000, () => {
  console.log('é bão');
}); 



