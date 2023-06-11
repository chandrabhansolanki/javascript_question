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
