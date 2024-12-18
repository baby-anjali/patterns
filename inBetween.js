//[1,2,3,400,245,5,6], elements between two elements [3, 6] => [400, 245, 5]

const inBetween = function (array, start, end) {
  const startIndex = array.indexOf(start);
  const endIndex = array.lastIndexOf(end);

  return array.slice(startIndex, endIndex);
};