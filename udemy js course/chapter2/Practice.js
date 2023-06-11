const Person = function (firstName, birthyear) {
  this.firstName = firstName;
  this.birthyear = birthyear;

  // never do these
  // this.getlastName = function () {
  //   const year = 2037 - this.birthyear;
  //   console.log(year);
  //   return year;
  // };
  // this.getlastName();
};

const chandra = new Person("chandra", 1994);
const ashish = new Person("ashish", 1993);
console.log(chandra, ashish);

Person.prototype.getlastName = function () {
  console.log("singh");
};
chandra.getlastName();
ashish.getlastName();

console.log(chandra.__proto__);
