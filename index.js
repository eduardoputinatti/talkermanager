const express = require('express');
const bodyParser = require('body-parser');

const getTalker = require('./middlewares/getTalker');
const getId = require('./middlewares/getId');
const { validMail, validPassword } = require('./middlewares/token');
const login = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getTalker);
app.get('/talker/:id', getId);
app.post('/login', validMail, validPassword, login);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
