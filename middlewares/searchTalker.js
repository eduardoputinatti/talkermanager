const fs = require('fs/promises');

const searchTalkerFunc = async (req, res) => {
  const { q } = req.query;
  const data = await fs.readFile('./talker.json', 'utf-8').then((t) => JSON.parse(t));

  const talker = data.filter((t) => t.name.includes(q));

  if (!q) {
    return res.status(200).json(data);
  }
  return res.status(200).json(talker);
  };

module.exports = searchTalkerFunc;
