// https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
module.exports = (req, res) => {
  const ramdonToken = Math.random().toString(36).substring(2, 10);
  const tokenfinal = ramdonToken + ramdonToken;
  return res.status(200).json({ token: `${tokenfinal}` });
};
