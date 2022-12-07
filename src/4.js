const fs = require("fs").promises;

const PATH = "src/utils/simpsons.json";
const NEW_FILE = 'src/utils/simpsonFamily.json';

const newFile = async () => {
  const data = await fs.readFile(PATH);
  const convertData = JSON.parse(data);

  const family = convertData.filter(
    (people) =>
      people.id >= String(1) && people.id <= String(4)
  );

  const response = JSON.stringify(family);
  await fs.writeFile(NEW_FILE, `${response}`);
};

newFile();