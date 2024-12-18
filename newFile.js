const pattern = function (symbol) {
  return function (times) {
    return symbol.repeat(times);
  };
};

const stars = pattern('*');
const spaces = pattern(' ');
const dashes = pattern('-');

const filledRectangle = function (column, row) {
  const patternSize = Array(row).fill(column);

  return patternSize.map(stars);
};