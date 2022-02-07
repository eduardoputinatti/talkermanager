const express = require('express');
const bodyParser = require('body-parser');

const getTalker = require('./middlewares/getTalker');
const getId = require('./middlewares/getId');
const { validPassword, validMail } = require('./middlewares/login');
const token = require('./middlewares/token');
const { createTalker } = require('./middlewares/createTalkers');
const validations = require('./middlewares/validationTalker');
const validationsPut = require('./middlewares/validPutTalker');
const delTalker = require('./middlewares/deleteTalker');
const validateToken = require('./middlewares/validationTalker');
const putTalker = require('./middlewares/editTalker');
const searchTalkerFunc = require('./middlewares/searchTalker');
const validTokenSearch = require('./middlewares/validateSearch');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getTalker);
app.get('/talker/:id', getId);
app.post('/login', validPassword, validMail, token);
app.post('/talker', validations,
createTalker);
app.put('/talker/:id', validationsPut, putTalker);
app.delete('/talker/:id', validateToken, delTalker);
app.get('./talker/search', searchTalkerFunc);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
