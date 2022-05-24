const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let childCounter = 0;
  let adultCounter = 0;
  let seniorCounter = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      childCounter += 1;
    } if (element.age >= 18 && element.age < 50) {
      adultCounter += 1;
    } if (element.age >= 50) {
      seniorCounter += 1;
    }
  });
  const obj = { child: childCounter, adult: adultCounter, senior: seniorCounter };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const child = countEntrants(entrants).child * prices.child;
  const adult = countEntrants(entrants).adult * prices.adult;
  const senior = countEntrants(entrants).senior * prices.senior;

  const totalValue = (child + adult + senior);

  return totalValue;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
