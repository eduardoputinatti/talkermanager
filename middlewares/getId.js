const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;

  const getId = await fs
    .readFile('./talker.json', 'utf-8')
    .then(JSON.parse);

  const findTalker = getId((nome) => nome.id === parseInt(id, 10));

  if (!findTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(getId);
};
