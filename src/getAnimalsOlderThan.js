const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((item) => item.name === animal);
  const habitants = animalObj.residents;
  for (let i = 0; i < habitants.length; i += 1) {
    if (habitants[i].age < age) {
      return false;
    }
  }
  return true;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
