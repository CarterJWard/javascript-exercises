const add = function (first, second) {
  return first + second
};

const subtract = function (first, second) {
  return first - second
};

const sum = function (arr) {
  let sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function (arr) {
  let sum = arr[0]
  for (i = 1; i < arr.length; i++) {
    sum = sum * arr[i]
  }
  return sum
};

const power = function (num, pow) {
  let sum = num
  for (i = 1; i < pow; i++) {
    sum = sum * num
  }
  return sum
};

const factorial = function (value) {
  let sum = 1
  for (i = 1; i <= value; i++) {
    sum = sum * i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
