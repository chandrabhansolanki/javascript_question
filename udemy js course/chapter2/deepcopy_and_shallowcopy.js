// Summary: in this tutorial, you will learn how to copy objects in JavaScript, including shallow copy and deep copy. To copy an object in JavaScript, you have three options:

// Use the spread (...) syntax
// Use the Object.assign() method
// Use the JSON.stringify() and JSON.parse() methods

// Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

// A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable.

const Person = {
  name: "chandra",
  age: 28,
};

let obj = JSON.parse(JSON.stringify(Person));
// console.log(obj);

let Student = {
  name: "mohit",
  age: 29,
  address: {
    street: "opposite gandhi marg",
    buiding: "sky Maker",
  },
};
/// spread Method 
let newObj = { ...Student };
newObj.name = "Ajay";
newObj.address.buiding = 'Indro ka wase'

// let newObj = Student
// newObj.name= 'radhe'
console.log(newObj, Student);


// object assign

let assign = Object.assign({}, Student);

assign.name = 'goodmorning'
assign.address.street = " delhi road nagar"

console.log(assign ,Student,'assign');


// deep copy method


let deepCopy = JSON.parse(JSON.stringify(Student))

deepCopy.name = 'Mohan',
deepCopy.address.street = 'Mumbai east road'

console.log(deepCopy, Student,'wewe');