const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return ids.map((element) => species.find((item) => item.id === element));
}

module.exports = getSpeciesByIds;
