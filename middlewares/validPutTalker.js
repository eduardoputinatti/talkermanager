const validToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (token.length < 16 || token.length > 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  return next();
};

const validName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return next();
};

const validAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

const validDate = (str) => {
  const splittedString = str.split('/');

  if (splittedString.length !== 3) {
      return false;
  }
  return true;      
};

const validTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || talk === '') {
    return res.status(400).json(
      { 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', 
      },
    );
  } 
  return next();
};

const validWatched = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (!watchedAt || watchedAt === '') {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  if (!validDate(watchedAt)) {
  return res.status(400).json({ 
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  });
  }
  return next(); 
};

const validRate = (req, res, next) => {
  const { rate } = req.body.talk;

  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  if (!rate || rate === '') {
    return res.status(400).json(
      { 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios', 
      },
    );
  }
  return next();
};

const validationsPut = [
  validToken,
  validName,
  validAge,
  validTalk,
  validRate,
  validWatched,
  ];

module.exports = validationsPut;