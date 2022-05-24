const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(ident) {
  return employees
    .filter(({ id }) => id === ident)
    .map(())
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
