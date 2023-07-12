// 1. we cannot call constructors function inside a arrow function.
// 2. we cannot cannot access  arguments object  inside a arrow function.
// 3. Arrow function are not hoisted , we cannot call before they iniitalized.
// 4. Arrow function have lexical this scope.

// point 1 example

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const chandra = new Student("chandra", 25);
console.log(chandra);

// const Car = (name, color)=> {
//     this.name= name
//     this.color=color
// }

// const maruti = new Car("swift", "red")

// point 2 example
function add(a, b) {
  console.log(arguments); // it will show the data relatede to the arguments
  var ans = a + b;
  return ans;
}
const b = add(2, 3);
console.log(b);

// const square = (a,b) => {
//     console.log(arguments)// it will show reference error
//     return a+b
// }

// square(4,4)

// point 3 example

person();

function person() {
  console.log("regular function");
}

// console.log(person1());
// const person1 = () => {
//     console.log("arrow function");
// }

// point 4 example

// const userInfo = {
//     name : "chandra",
//     fullName(){
//         console.log(this.name + ' '+ `Singh`);
//     }
// }

// const data = userInfo.fullName()

const userInfo = {
  name: "chandra",
  fullName: function() {
    var a = () => {
      console.log(this.name + " " + `Singh`);
    };
    a();
  },
};

userInfo.fullName();

// this is a bug in java script function where 'this' will refer to the global object when we use 'this' inside a lexical function. In these condition we have to use arrow function inside a function so we can get the object property.

// const userInfo = {
//   name: "chandra",
//   fullName: function () {
//     function a() {
//       console.log(this);
//     }
//     a();
//   },
// };

// userInfo.fullName();

var a = 4;
let as = 9;
console.log(a);
