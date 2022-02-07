const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;

  const getIds = await fs
    .readFile('./talker.json', 'utf-8');
  const getIdJson = JSON.parse(getIds);

  const findTalker = getIdJson.find((nome) => nome.id === parseInt(id, 10));

  if (!findTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(findTalker);
};
