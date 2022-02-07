const fs = require('fs').promisses;

module.exports = async (req, res) => {
  const talker = await fs
    .readFile('./talker.json', 'utf-8')
    .then(JSON.parse);

  res.status(200).json(talker);
};
