const data = require('../data/zoo_data');

const { species, hours } = data;

function getSchedule(scheduleTarget) {
  const target = species.find((animal) => animal.name === scheduleTarget);
  return target.availability;
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
