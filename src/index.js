const fs = require('fs').promises;

const read = async () => {
  const data = await fs.readFile('src/utils/simpsons.json');
  const content = JSON.parse(data);
  const response = content.map((info) => `${info.id} - ${info.name}`);
  console.log(response);
}

read();