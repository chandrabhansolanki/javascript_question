//  prototoype is a mechanism  in which we inherit  all "objects" which we can use in a javascript.

// all the objects that are created through this constructor function will inherit so they get access all the methods and properties that are defined on this prototype property

// how we can create prototype ?
// 1 constructin function
// 2 ES 6 classes
// 3 Object.create()
/*
// 1 constructor function
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;

  // never do these
  // this.calcAge = function() {
  //   console.log(2037 - this.birthyear);
  // }
};

const chandra = new Person("chandra", 1994);
const ashish = new Person("ashish", 1993);
console.log(chandra, ashish);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

chandra.calcAge();
*/

// ES 6 class is a very easy and much better way compare to a constructor function.we can also use getter and setter methods in class.

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // these method will add into the prototype. These is a inside method of class
  calcAge() {
    console.log(2032 - this.birthYear);
  }
  // getter method in class
  get age() {
    const a = 2032 - this.birthYear;
    console.log(a);
    return a;
  }

  // set a property that already exist
  // set fullName(name) {
  //   console.log(name);
  //   if (name.includes(" ")) this._fullName = name;
  //   else alert(`${name} is not a full name`);
  // }

  // get _fullName() {
  //   return this._fullName;
  // }
}

const Mohit = new PersonCL("Mohit", 1996);
const Rakesh = new PersonCL("rakesh solanki", 1998);
console.log(Mohit);
Mohit.calcAge();
Rakesh.calcAge();
console.log(Mohit.__proto__ === PersonCL.prototype);
// getter method to call data
console.log(Rakesh.age);

//  These is outside method of class function we can use one of them.
// these can also add method in prototype
PersonCL.prototype.greet = function () {
  console.log(`hello ${this.firstName}`);
  console.log(`hello ${this.fullName}`);
};

Mohit.greet();
Rakesh.greet();

// 3 Object.create()
