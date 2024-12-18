const pattern = function (symbol) {
  return function (times) {
    return symbol.repeat(times);
  };
};

const stars = pattern('*');
const spaces = pattern(' ');
const dashes = pattern('-');

const filledRectangle = function (column, row) {
  return Array(row).fill(column).map(stars);
};