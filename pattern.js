const pattern = function (string) {
  return function (times) {
    return times < 1 ? "" : string.repeat(times);
  };
};

const stars = pattern('*');
const dashes = pattern('-');
const spaces = pattern(' ');

const range = function (start, end, step) {
  const numbers = [];

  for (let index = start; index < end; index += step) {
    numbers.push(index);
  }

  return numbers;
};

const filledRectangle = function (column, row) {
  const patternSize = Array(row).fill(column);

  return patternSize.map(stars);
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

const alterRectangle = function (column, row) {
  const symbols = cycle([stars, dashes]);
  const patternSize = Array(row).fill(column);

  return patternSize.map(function (size) {
    const newRow = symbols();
    return newRow(size);
  });
};

const isSmallRectangle = function (column, row) {
  return column < 3 || row < 3;
};

const hollowLine = function (times) {
  return '*' + spaces(times - 2) + '*';
};

const hollowRectangle = function (column, row) {
  const rectangle = filledRectangle(column, row);

  if (isSmallRectangle(column, row)) {
    return rectangle;
  }

  return rectangle.fill(hollowLine(column), 1, - 1);
};

const spacedAlterRectangle = function (column, row) {
  const symbols = cycle([stars, dashes, spaces]);
  const patternSize = Array(row).fill(column);

  return patternSize.map(function (size) {
    const newRow = symbols();
    return newRow(size);
  });
};

const triangle = function (size) {
  return range(1, size + 1, 1).map(stars);
};

const padding = function (size) {
  return function (row) {
    return row.padStart(size);
  }
}

const rightTriangle = function (size) {
  return triangle(size).map(padding(size));
}