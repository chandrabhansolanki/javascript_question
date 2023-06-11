// what is this?
// 1. Alone "this" refers to the global object.
// 2. In a regular function "this" refers to the global object.
// 3. In a method, this refers to the owner object.
// 4. In a function in a strict mode , "this" is undefined

console.log(this);

function sum() {
  var add = 2 + 2;
  console.log("sum of two no is" + add);
  console.log(this); // regular function and it represent to the global object
}
sum();

const students = {
  name: "chandra bhan singh",
  class: 12,
  information: function () {
    const a = "we are going for a movie";
    console.log(a);
    console.log(this); // 'this' refers to the owner object
  },
};

students.information();
