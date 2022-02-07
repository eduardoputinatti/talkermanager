const fs = require('fs').promises;

const delTalker = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const dataJson = JSON.parse(data);
  const getTalkerByIndex = dataJson.findIndex((talker) => talker.id === id);

  fs.writeFile('./talker.json', JSON.stringify(getTalkerByIndex));

  return res.status(204).json({});
};

module.exports = delTalker;
