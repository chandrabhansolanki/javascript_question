// Destructuring Array extracting multiple properties from an array by taking the structure and deconstructing

const animals = ["dog", "Lion", "Tiger", "Elephant", "cow"];
const [a, b, c, d, e] = animals;
console.log(a, b, c, d, e);

const restaurant = {
  startMenu: ["Parata", "Garlic", "Salad", "Egg"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.order(2, 0));
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// nested destucturing

const nested = [2, 4, [5, 6]];
const [p, , [q, k]] = nested;
console.log(p, q, k);
