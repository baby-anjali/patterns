//[1,2,3,400,245,5,6], elements between two elements [3, 6] => [400, 245, 5]

const inBetween = function (array, start, end) {
  const startIndex = array.indexOf(start) + 1;
  const endIndex = array.lastIndexOf(end);

  const numbers = [];

  for (let index = startIndex; index < endIndex; index++) {
    numbers.push(array[index]);
  }

  return numbers;
};