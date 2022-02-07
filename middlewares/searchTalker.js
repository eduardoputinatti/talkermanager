const fs = require('fs/promises');

const searchTalkerFunc = async (req, res) => {
  const { q } = req.query;
  const data = await fs.readFile();
  if (!q) {
    res.status(200).json(data);
  }
  const talker = data.filter((t) => t.name.includes(q));
  res.status(200).json(talker);
  };

module.exports = searchTalkerFunc;
