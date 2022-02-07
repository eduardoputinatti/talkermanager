const express = require('express');
const bodyParser = require('body-parser');

const getTalker = require('./middlewares/getTalker');
const getId = require('./middlewares/getId');

const app = express();
app.use(bodyParser.json());

app.get('/talker/:id', getId);
app.get('/talker', getTalker);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
