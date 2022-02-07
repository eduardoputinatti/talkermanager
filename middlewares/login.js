const validMail = (req, res, next) => {
  const { email } = req.body;
  // saber se o e-mail é diferente de zero
  if (!email || email.length === 0) {
    res.status(400).json({ message: 'O campo "email" é obrigatório', valid: false });
  }
  // saber se o email é valido
  if (!email.includes('@') || !email.includes('.com')) {
    res.status(400)
    .json({ message: 'O "email" deve ter o formato "email@email.com"', valid: false });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    res.status(400).json({ message: 'O campo "password" é obrigatório', valid: false });
  }
  if (password.length < 6) {
    res.status(400)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres', valid: false });
  }
  next();
};

module.exports = {
  validPassword,
  validMail,
};