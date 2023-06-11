// stringyfy convert this object into a string to be stored in local storage.

const student = {
  name: "chandra",
  age: 23,
  isActive: true,
};

const studentObjtoString = JSON.stringify(student);
console.log(typeof studentObjtoString);

localStorage.setItem("student", studentObjtoString);

// parase : conver the jsonstringify object file in to a object
const toJSONstudent = JSON.parse(studentObjtoString);
console.log(toJSONstudent);
