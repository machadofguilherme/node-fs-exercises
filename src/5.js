const fs = require('fs').promises;

const PATH = 'src/utils/simpsonFamily.json';

const insertPeople = async () => {
  const data = await fs.readFile(PATH);
  const convert = JSON.parse(data);

  const object = {
    id: '5',
    name: 'Nelson Muntz'
  };

  convert.push(object);

  const result = JSON.stringify(convert);
  await fs.writeFile(PATH, `${result}`);
}

insertPeople();