//make closure for n functions

const half = function (number) {
  return number / 2;
};

const isEven = function (number) {
  return number % 2 === 0;
};

const evaluate = function (init, funcName) {
  return funcName(init);
};

const combine = function (...functionsList) {
  return function (...input) {
    return functionsList.reduce(evaluate, input);
  };
};

const testEach = function (failed, [funcName, input, expected]) {
  const actual = funcName(input);

  if (actual !== expected) {
    failed.push([funcName, input, expected, actual]);
  }

  return failed;
};

const test = function (array) {
  const failed = [];

  array.reduce(testEach, failed);

  console.log(array.length - failed.length, '/', array.length, 'is passing');
  console.table(failed);
};

const fourFunctions = combine(half, Math.sqrt, Math.floor, isEven);
const threeFunctions = combine(half, Math.floor, isEven);
const threeFunctions2 = combine(half, Math.floor,);
const twoFunctions = combine(Math.floor, isEven);
const oneFunctions = combine(isEven);

const testCases = [
  [oneFunctions, 3, false],
  [oneFunctions, 4, true],
  [twoFunctions, 4.6, true],
  [twoFunctions, 3.6, false],
  [threeFunctions, 15, false],
  [threeFunctions, 17, true],
  [threeFunctions2, 15, 7],
  [threeFunctions2, 17, 8],
  [fourFunctions, 8, true],
  [fourFunctions, 4, false]
];

test(testCases);