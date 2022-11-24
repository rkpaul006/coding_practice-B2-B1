const addDays = require("date-fns/addDays");

const myFunction = (x) => {
  const result = addDays(new Date(2020, 7, 22), x);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = myFunction;
