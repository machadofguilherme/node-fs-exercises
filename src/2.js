const fs = require('fs').promises;

const getInfo = async (id) => {
  const data = await fs.readFile('src/utils/simpsons.json');
  const info = JSON.parse(data);
  const response = info.find((info) => info.id === id);
  console.log(response);
}

getInfo('4');