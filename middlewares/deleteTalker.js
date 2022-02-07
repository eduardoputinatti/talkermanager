const fs = require('fs').promises;

const delTalker = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const dataJson = JSON.parse(data);
  const getTalkerByIndex = dataJson.filter((talker) => talker.id !== parseInt(id, 10));
  console.log(getTalkerByIndex);
  console.log('teste');
  fs.writeFile('./talker.json', JSON.stringify(getTalkerByIndex));
  console.log('teste');
  res.status(204).end();
};

module.exports = delTalker;
