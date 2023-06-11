// Function

// function myproperties(myprops, age) {
//   myprops.age = age;
//   return "value changed";
// }
// const vishwa = {
//   name: "vishwa",
//   rollno: 12345,
//   age: 23,
// };
// myproperties(vishwa, 25);

// console.log(myproperties(vishwa, 26));
// console.log(vishwa);
// function myfun(apple, oranges) {
//   console.log(apple, oranges);
// const juice = `juice with ${apple} apple and ${oranges} oranges`;
// return juice;
// }

// const applejuice = myfun(6, 8);
// console.log(applejuice);

// function Declaration
// function calcAge(birthYear) {
//   console.log(birthYear);
//   const age = 2037 - birthYear;
//   return age;
// }

// const birth = calcAge(2030);
// console.log(birth);

//function expression

// const calcAge2 = function (birthYear) {
//   const age2 = 2040 - birthYear;
//   return age2;
// };

// const a = calcAge2(2020);
// console.log(birth, a);

// const array = [1, 2, 3, 4, 5, 6];

// array.splice(2, 4, 21);
// console.log(array);

// let value = ["ram", "mohan", "sohan"];
// let value2 = ["chandra", ...value, "rakesh", "vishwa"];

// console.log(value2);

// Arrow function

// const calcAge3 = (birthYear) => 2039 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3);

// finding time left for retirement

// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// const value = yearUntilRetirement(1991);
// console.log(value);

// function calling inside other function

// function fruitMachine(fruit) {
//   const cutfruits = 4 * fruit;
//   return cutfruits;
// }

// function juiceMachine(apple, oranges) {
//   const applepieces = fruitMachine(apple);
//   const orangepieces = fruitMachine(oranges);
//   const juice = `juice of ${applepieces} apple and juice of ${orangepieces} oranges`;
//   return juice;
// }
// const glassofjuice = juiceMachine(4, 2);
// console.log(glassofjuice);

// one more example of function calling inside of another function

/*
const calcage = function (birthYear) {
  const birthday = 2021 - birthYear;
  return birthday;
};

const yearUntilRetirement = function (yearofBirth, firstName) {
  const age = calcage(yearofBirth);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retirement age is left ${retirement}`);
    return retirement;
  } else {
    return -1;
  }
};

const yearsleftretirement = yearUntilRetirement(1904, "Mohit");
console.log(yearsleftretirement);*/

/* Challenge 1 chapter 2 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �*/

/*
function calcAvg(a, b, c) {
  const Avg = (a + b + c) / 3;
  return Avg;
}

const scoreDolhins = calcAvg(44, 23, 71);
const scoreKoalas = calcAvg(65, 54, 49);
console.log(scoreDolhins, scoreKoalas);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`avgDolhins won the match ${avgDolhins} against ${avgKoalas}`);
    return;
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`avgKoalas won the match ${avgKoalas} against ${avgDolhins} `);
    return;
  } else {
    console.log("No one will won the match");
  }
}

// const matchwon = checkWinner(scoreDolhins, scoreKoalas);

// Test 2
const ascoreDolhins = calcAvg(85, 54, 41);
const ascoreKoalas = calcAvg(23, 34, 27);
console.log(ascoreDolhins, ascoreKoalas);
checkWinner(ascoreDolhins, ascoreKoalas);*/
/*
// Arrays

const Array1 = ["ram", "mohan", "chandra"];
console.log(Array1);

Array1[1] = "surya";
console.log(Array1);

const year = [1991, 1981, 1996, 1945, 1936];

const calcage = function (birthYear) {
  const birthday = 2021 - birthYear;
  return birthday;
};
const age1 = calcage(year[0]);
const age2 = calcage(year[1]);
const age3 = calcage(year[4]);
const age4 = calcage(year[year.length - 1]); // if the array is too long to find last array varible we can use -1
console.log(age1, age2, age3, age4);

// puting function call in an array example

const age5 = [calcage(year[0]), calcage(year[1]), calcage(year[4])];
console.log(age5);*/

// Object Oriented Programming(oop) with javaScript

// Prototype is very important method.

const arr = [3, 6, 4, 8, 9, 2, 3, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const value = ["a", "b", "c", "a", "d", "e", "b", "b", "c", "e"];
console.log(value.unique());

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h.
