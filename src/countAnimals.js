const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const animalList = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return animalList;
  } if (!animal.sex) {
    const selectedAnimal = species.find((selected) => selected.name === animal.specie);
    return selectedAnimal.residents.length;
  }
  const selectedSex = species
    .find((selected) => selected.name === animal.specie)
    .residents.filter((selected) => selected.sex === animal.sex).length;
  return selectedSex;
}

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
