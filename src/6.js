const fs = require('fs').promises;

const PATH = 'src/utils/simpsonFamily.json';

const replaceCharacter = async () => {
  const data = await fs.readFile(PATH);
  const convert = JSON.parse(data);

  const index = convert
    .findIndex((index) => index.name === 'Nelson Muntz');
  
  convert[index] = {
    id: '5', name: 'Maggie Simpson'
  }

  const result = JSON.stringify(convert);
  await fs.writeFile(PATH, `${result}`);
}

replaceCharacter();