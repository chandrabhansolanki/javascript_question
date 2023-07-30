// what is callback function ?

// Any function that is passed as an argument is called a callback function.

/*
const callA = () => {
  console.log(`Welcome to my page callA`);
};

const callB = () => {
  console.log(`Welcome to my page callB`);
};

callA();
callB();
*/

// if we use time out function
// const callA = () => {
//   setTimeout(function () {
//     console.log(`Welcome to my page callA`);
//   }, 3000);
// };

// const callB = () => {
//   console.log(`Welcome to my page callB`);
// };

// callA();
// callB();

// A callback is a function that is to be excuted after another function has finished executing -- hence the name "call back" example:-

const personOne = (friend, callback) => {
  console.log(`I will call you back ${friend} . when i was free from my work.`);
  callback();
};

const peronTwo = () => {
  console.log(`ok call me back.`);
};

personOne("chandra", peronTwo);

//  CALLBACK HELL
// Callback hell, also known as the pyramid of doom, is a term used in JavaScript programming to describe a situation where multiple nested callbacks are used, leading to deeply indented and hard-to-read code. It occurs when you have asynchronous operations that depend on each other, and the code becomes difficult to manage due to the increasing number of callbacks and their indentation levels.

//In JavaScript, callbacks are commonly used for asynchronous tasks, such as making AJAX requests, reading files, or interacting with databases. When you have multiple asynchronous operations that depend on each other's results, you end up with a series of nested callbacks. Here's an example of callback hell:


// Readability and maintainability: The deeply nested callbacks make the code harder to read, understand, and modify. It becomes challenging to follow the flow of execution.

// Error handling: Error handling becomes cumbersome when dealing with multiple nested callbacks. Handling errors at different levels of nesting becomes complex.

// Code reuse: Code reuse is challenging because the callback logic is tightly coupled within the nested structure.