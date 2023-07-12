// RestOperator is an improved way to handle function parameter. with the help of a rest parameter a function can be called with any number of arguments

function fun(...add) {
  let sum = 0;
  for (let i of add) {
    sum += i;
  }
  return sum;
}

const addvalue = fun(1, 2, 3, 4, 5, 6, 7);
console.log(addvalue);

function multiply(...multi) {
  let total = 2;
  for (let i of multi) {
    total *= i;
  }
  return total;
}

let x = multiply(1, 2, 4, 5);
console.log(x, "multi");
