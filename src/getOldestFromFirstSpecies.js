const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employee) => (employee.id === id));
  const { residents } = species.find((specie) => (specie.id === responsibleFor[0]));
  return Object.values(residents.reduce((acc, curr) => {
    if (acc.age > curr.age) {
    //   console.log(curr);
      return acc;
    } return curr;
  }));
}

// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
