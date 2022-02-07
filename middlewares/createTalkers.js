const fs = require('fs').promises;

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const data = await fs.readFile('./talker.json', 'utf8').then(JSON.parse);
  const id = data[data.length - 1].id + 1;
  const talker = {
    id,
    name,
    age,
    talk,
  };

  data.push(talker);
  await fs.writeFile('./talker.json', JSON.stringify(data));
  return res.status(201).json(talker);
};

module.exports = {
  createTalker,
};