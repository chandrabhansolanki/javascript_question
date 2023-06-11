// constructor method is a special method of an class which we can create and initialize an object

// __proto__ => we can actually confirm that because every object has a special property is called proto
// eq:

/*
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;

  //we can't use these method
  // this.getlastName = function (a) {
  //   const last = a;
  //   console.log(last);
  //   return last;
  // };
  // this.getlastName("singh");
};

const chandra = new Person("chandra", 1994);
const ashish = new Person("ashish", 1993);
console.log(chandra, ashish);

Person.prototype.getlastName = function () {
  console.log("singh");
};

chandra.getlastName();
console.log(chandra.__proto__);
console.log(chandra.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(chandra));
*/

// Inheritance between "classes" : constructor Function
/*
const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

const Students = function (firstName, birthyear, course) {
  Person.call(this, firstName, birthyear);
  this.course = course;
};
// Linking prototype
Students.prototype = Object.create(Person.prototype);

Students.prototype.introdution = function () {
  console.log(`My name is ${this.firstName} and i study in ${this.course}`);
};

const surya = new Students("Surya", 2003, "Accounts");
surya.introdution();
surya.calcAge();

Students.prototype.constructor = Students;

console.log(surya.__proto__);
console.log(surya.__proto__.__proto__);
console.log(surya.__proto__ === Students.prototype);
*/
//Constructor Challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} running , with a speed of  ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `${this.make} when we push the break the speed decrease by ${this.speed} km/hr. `
  );
};

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototype
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} increase the speed by ${this.speed}km/hr charge decrease by ${this.charge}%. `
  );
};

const tesla = new ElectricCar("Tesla", 140, 23);
console.log(tesla);
tesla.brake();
tesla.accelerate();
tesla.chargeBattery(90);

const maruti = new Car("Lamborgine", 84);
console.log(maruti);
maruti.accelerate();
maruti.brake();
// maruti.chargeBattery(54);
