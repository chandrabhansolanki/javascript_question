// ScopeChain = The scope chain is used to resolve the value of variable names in JavaScript.
// lexical scoping = in lexical scoping a function that is inside of another function can get access to the  scope of the outer function. (inner function can get access to the parent function varibles . But vice versa is not true)

var a = "hello guys...";
function first() {
  var b = "how are you?...";
  console.log(a + b);
  // console.log(c); // parent cannot acces there child function
  function secound() {
    var c = "I am fine .";
    console.log(a + b + c); // child can access all these varibale
    three();
  }
  secound();
}

function three() {
  var d = "are you coming on my brothers marriage.";
  console.log(a + b + c + d); // these will show the referrence error because it will not access its child function.
}
first();
