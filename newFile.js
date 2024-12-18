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
  let x = -1;

  return function () {
    x++;

    if (x >= array.length) {
      x = 0;
    }

    return array[x];
  };
};