// super = super is the keyword to use to access and call the function of an object of parents.
// super is the basically constructor function of parents.

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // these method will add into the prototype. These is a inside method of class
  calcAge() {
    console.log(2032 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // getter method in class
  get age() {
    const a = 2032 - this.birthYear;
    console.log(a);
    return a;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name.`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there.");
  }
}

class StudentsCL extends PersonCL {
  constructor(fullName, birthyear, course) {
    super(fullName, birthyear);
    this.course = course;
  }

  introduce() {
    console.log(`Hey My name ${this.fullName} and i study in ${this.course}`);
  }

  // Over writing of calcAge method from parent class
  calcAge() {
    console.log(
      `Hello every one these is my actual age ${2040 - this.birthYear}.`
    );
  }
}

const chandra = new StudentsCL("chandra singh", 1994, "Accounts");

console.log(chandra);
chandra.introduce();
chandra.greet();
chandra.calcAge();
