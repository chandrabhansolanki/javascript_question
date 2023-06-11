// Diff between map and forEach ?
// Map method return a new array by applying the callback function on each element of an array while the forEach method doent return anything.

// example:

const array1 = [1, 2, 3, 4, 5];

const array2 = array1.forEach((element, index) => {
  array1[index] = element * element;
  console.log(index, element);
});
console.log(array2);
console.log(array1);
