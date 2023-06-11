// getter = getter is a method that collects a value from the property .
// setter = setter is a method that set the value of the propery

// getter and setter are used to hide private things from publicity (you can avoid direct access to a field.

const account = {
  owner: "chandra",
  Movement: [100, 25, 54, 300, 496],

  get latest() {
    return this.Movement.slice(-1).pop(2);
  },

  set latest(mov) {
    return this.Movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 100;
console.log(account.latest);
console.log(account.Movement);
