const express = require ('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  // console.log (request);
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/connect',(request, response, next) => {
  response.sendFile(__dirname + '/views/conect.html')
});

app.get('/pic', (request, response, next) => {
  response.sendFile(__dirname + '/views/picture.html')
});




app.listen(3000, () => {
  console.log('My first web page')
});