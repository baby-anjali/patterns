const simpleCount = function () {
  let x = 0;

  return function () {
    x++;
    return x;
  }
}

const add = function (x) {
  return function (y) {
    return x + y;
  }
}

const limitedCount = function (y) {
  let x = 0;

  return function () {
    if (x >= y) {
      x = 0;
    }

    x++;
    return x;
  }
}


const cycle = function (array) {
  let x = -1;

  return function () {
    x++;

    if (x >= array.length) {
      x = 0;
    }

    return array[x];
  }
}