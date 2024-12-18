const pattern = function (symbol) {
  return function (times) {
    return symbol.repeat(times);
  };
};