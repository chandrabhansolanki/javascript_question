/*synchronous = 1 synchronous code is executed line by line. 
2. Each line of code waits for previous line to finish. 
3. if there is any error we have to wait.
4. Long running operatrion Block code execution.*/

/* Asynchronous = 1 Asynchronous code is excuted after a task that runs the "background" finished.

2. Asynchronous code is non-blocking.
3. Excution doesn't wait for an asynchronus task to finish its work.
4. callback function alone do Not make code asynchronous. 
*/

// what is AJAX ?
/* Asycnchronus javascript And XML : Allows us to communicate with remote web servers in an asynchronous way. with AJAX calls we can request data from web servers dynamically*/

/* Online API = application running on a server that receives request and send data according to the user request */

/* promise = An object that is used as a placeholder for the future result of an asynchronous*/
// promise is container for a future value.

// diff between async await and promise
// promise
// 1 Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.
// 2 Promise has 3 states – resolved, rejected and pending.
// 3 Error handling is done using .then() and .catch() methods.

//async await
// 1 Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.
// 2 it does not have any states. It returns a promise either resolved or rejected.

// 3 Error handling is done using .try() and .catch() methods.

// syntax async await
async function hello() {
  try {
    const message = await api;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
hello();

// syntax

const demo = function (country) {
  fetch("api")
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      console.log(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

// Introduction to the JavaScript promise chaining
// Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step

// let mulit = Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 3000);
// });

// mulit.then((result) => {
//   return 2 * result;
// });

// console.log(multi);
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return result * 2;
});