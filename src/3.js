const fs = require('fs').promises;

const changeFile = async () => {
  const data = await fs.readFile('src/utils/simpsons.json');
  const convertData = JSON.parse(data);

  const list = convertData
    .filter((info) => info.id !== '6' && info.id !== '10');
 
  const response = JSON.stringify(list);
  await fs.writeFile('src/utils/simpsons.json', `${ response }`);
}

changeFile();  