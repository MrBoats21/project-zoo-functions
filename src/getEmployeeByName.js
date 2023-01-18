const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(nome) {
  if (nome === undefined) {
    return {};
  }
  return employees.find((item) => (item.lastName === nome || item.firstName === nome));
}

console.log(getEmployeeByName('Stephanie'));

module.exports = getEmployeeByName;
