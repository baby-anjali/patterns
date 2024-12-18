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

const cycle = function (array) {
  let index = -1;

  return function () {
    index++;

    if (index >= array.length) {
      index = 0;
    }

    return array[index];
  };
};